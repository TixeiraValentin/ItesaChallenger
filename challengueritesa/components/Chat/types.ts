export interface Message {
    text: string;
    isBot: boolean;
    isLoading: boolean;
  }
  
  export interface ChatBoxProps {
    messages: Message[];
  }
  
  export interface ChatInputProps {
    onSendMessage: (message: string) => void;
  }
  