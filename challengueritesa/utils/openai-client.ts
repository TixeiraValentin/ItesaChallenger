import OpenAI from 'openai';

console.log(process.env.OPENAI_SECRET_KEY)

const openai = new OpenAI({
  apiKey: process.env.OPENAI_SECRET_KEY,
});

export default openai;
