import { Box, Text, VStack, Divider } from '@chakra-ui/react';
import { ChatBoxProps } from '../types';

const ChatBox = ({ messages }: ChatBoxProps) => {
  return (
    <VStack
      divider={<Divider />}
      spacing={4}
      align='stretch'
      w='100%'
      maxH='60vh'
      overflowY='auto'
      p={4}
    >
      {messages.map((message, index) => (
        <Box key={index} bg={message.isBot ? 'blue.100' : 'green.100'} p={4} borderRadius='md'>
          <Text>{message.text}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default ChatBox;
