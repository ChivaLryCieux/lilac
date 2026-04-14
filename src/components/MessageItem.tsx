import React from 'react';
import { Box, Text } from 'ink';
import type { Message } from '../types';

interface MessageItemProps {
  message: Message;
}

export const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const isUser = message.role === 'user';
  
  return (
    <Box flexDirection="column" marginBottom={1}>
      <Box>
        <Text bold color={isUser ? 'blue' : 'green'}>
          {isUser ? '👤 You' : '🪻 Lilac'}
        </Text>
        <Text color="gray"> · {new Date(message.timestamp).toLocaleTimeString()}</Text>
      </Box>
      <Box marginLeft={2}>
        <Text>{message.content}</Text>
      </Box>
    </Box>
  );
};
