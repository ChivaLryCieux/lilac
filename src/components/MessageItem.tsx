import React from 'react';
import { Box, Text } from 'ink';
import type { Message } from '../types';

interface MessageItemProps {
  message: Message;
}

export const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const isUser = message.role === 'user';
  const accentColor = isUser ? 'blue' : 'magenta';
  
  return (
    <Box flexDirection="column" marginBottom={1}>
      <Box paddingX={1}>
        <Box 
          borderStyle="classic" 
          borderColor={accentColor} 
          borderTop={false} 
          borderBottom={false} 
          borderRight={false}
          paddingLeft={1}
          flexDirection="column"
        >
          <Box marginBottom={0}>
            <Text bold color={accentColor}>
              {isUser ? 'USER' : 'LILAC'}
            </Text>
            <Text color="gray"> · {new Date(message.timestamp).toLocaleTimeString()}</Text>
          </Box>
          <Box>
            <Text color={isUser ? 'white' : 'whiteBright'}>{message.content}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
