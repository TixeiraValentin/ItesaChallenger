import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../utils/dbConnect'; 
import openai from '../../utils/openai-client';
import Message from './models/Message';

// Una función auxiliar para guardar mensajes en la base de datos
const saveMessage = async (text: string, sender: 'user' | 'chatgtp') => {
  await dbConnect();
  return Message.create({ text, sender });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {

    if (!req.body.message) {
      return res.status(400).json({ error: 'No message provided' });
    }

    try {
      const { message } = req.body;


      await saveMessage(message, 'user');

 
      const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      });

      const botResponse = chatCompletion.choices[0].message.content;


      await saveMessage(botResponse, 'chatgtp');

      res.status(200).json({ answer: botResponse });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al procesar la solicitud' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

