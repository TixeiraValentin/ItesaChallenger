import OpenAI from 'openai';

const apiKey = process.env.OPENAI_SECRET_KEY;
if (!apiKey) {
  throw new Error('The OPENAI_API_KEY is not defined');
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_SECRET_KEY,
});

export default openai;
