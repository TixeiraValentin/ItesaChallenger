// pages/api/messages.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../utils/dbConnect';
import Message from './models/Message';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const messages = await Message.find({}).sort({ createdAt: -1 }).lean();
      res.status(200).json({ success: true, messages });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Error al recuperar los mensajes' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
