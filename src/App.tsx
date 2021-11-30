import { Center, ChakraProvider, Stack } from '@chakra-ui/react';
import '@fontsource/yusei-magic';
import { VFC } from 'react';
import { CompleteTodos } from './components/organisms/CompleteTodos';
import { IncompleteTodos } from './components/organisms/IncompleteTodos';
import { InputTodo } from './components/organisms/InputTodo';
import { TodoProvider } from './providers/TodoProvider';
import { theme } from './theme/theme';

export const App: VFC = () => {
  return (
    <TodoProvider>
      <ChakraProvider theme={theme}>
        <Center mt="10">
          <Stack>
            <InputTodo />
            <IncompleteTodos />
            <CompleteTodos />
          </Stack>
        </Center>
      </ChakraProvider>
    </TodoProvider>
  );
};
