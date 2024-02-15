export interface Message {
    text: string;
    isBot: boolean;
  }
  
  export interface ChatBoxProps {
    messages: Message[];
  }
  
  export interface ChatInputProps {
    onSendMessage: (message: string) => void;
  }
  