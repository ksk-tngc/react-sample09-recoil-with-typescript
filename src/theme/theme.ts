import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: '"Yusei Magic"',
    body: '"Yusei Magic"',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.900',
      },
    },
  },
});
