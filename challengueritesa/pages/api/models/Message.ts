import mongoose, { Document, Model } from 'mongoose';

export interface IMessage extends Document {
  text: string;
  sender: 'user' | 'chatgtp';
  createdAt: Date;
}

// Esquema para mensajes
const messageSchema = new mongoose.Schema({
  text: { type: String, required: true },
  sender: {
    type: String,
    required: true,
    enum: ['user', 'chatgtp'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Modelo de mensaje
const Message: Model<IMessage> = mongoose.models.Message || mongoose.model<IMessage>('Message', messageSchema);

export default Message;
