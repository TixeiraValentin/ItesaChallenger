import { NextApiRequest, NextApiResponse } from 'next';
import openai from '../../utils/openai-client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { message } = req.body;

      const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: message}],
      });

      res.status(200).json({ answer: chatCompletion.choices[0].message.content });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al procesar la solicitud' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
