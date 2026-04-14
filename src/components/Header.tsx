import React from 'react';
import { Box, Text } from 'ink';

interface HeaderProps {
  skillName?: string;
  model?: string;
  status: string;
}

export const Header: React.FC<HeaderProps> = ({ skillName, model, status }) => (
  <Box borderStyle="round" borderColor="magenta" paddingX={1} marginBottom={1} flexDirection="column">
    <Box justifyContent="space-between">
      <Text bold color="magenta">Lilac Agent v1.0</Text>
      <Text color="gray">{model || 'default'}</Text>
    </Box>
    <Box>
      <Text>Active Skill: </Text>
      <Text color="cyan">{skillName || 'None'}</Text>
      <Box marginLeft={2}>
        <Text color="yellow">[{status}]</Text>
      </Box>
    </Box>
  </Box>
);
