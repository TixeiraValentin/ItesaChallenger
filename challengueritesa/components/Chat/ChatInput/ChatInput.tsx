import { Input, HStack, Button } from '@chakra-ui/react';
import { FormEvent, useState } from 'react';
import { ChatInputProps } from '../types';

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    onSendMessage(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt={4}>
        <Input
          variant='filled'
          placeholder='Escribe tu mensaje aquí...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button colorScheme='blue' px={8} type='submit'>
          Enviar
        </Button>
      </HStack>
    </form>
  );
};

export default ChatInput; 
