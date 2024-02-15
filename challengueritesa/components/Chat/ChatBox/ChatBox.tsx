import { Box, Text, VStack, Divider, Spinner, Flex } from "@chakra-ui/react";
import { ChatBoxProps } from "../types";

const ChatBox = ({ messages }: ChatBoxProps) => {
  return (
    <VStack
      divider={<Divider />}
      spacing={4}
      align="stretch"
      w="100%"
      maxH="60vh"
      overflowY="auto"
      bg="gray.50"
      borderRadius="lg"
      p={4}
    >
      {messages.map((message, index) => (
        <Flex
          key={index}
          direction="column" 
          bg={message.isBot ? "blue.100" : "green.100"}
          p={4}
          borderRadius="md"
        >
          <Text mb={message.isLoading ? 2 : 0}>{message.text}</Text>
          {message.isLoading && (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500" 
              size="xl"
              alignSelf="center"
            />
          )}
        </Flex>
      ))}
    </VStack>
  );
};

export default ChatBox;
