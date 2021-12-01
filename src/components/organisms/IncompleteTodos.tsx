import { Fade, List, useDisclosure } from '@chakra-ui/react';
import { memo, useEffect, VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { todoState } from '../../store/todoState';
import { BoxAreaWithTitle } from '../molecules/BoxAreaWithTitle';
import { IncompleteTodoItem } from '../molecules/IncompleteTodoItem';

/**
 * 未完了のToDoエリア
 */
export const IncompleteTodos: VFC = memo(() => {
  const todos = useRecoilValue(todoState);
  const { isOpen, onOpen } = useDisclosure();

  // Fadeのトリガー
  useEffect(() => onOpen(), [onOpen, todos]);

  return (
    <BoxAreaWithTitle bg="#f3e2b3" title="未完了のToDo">
      <List spacing="2">
        {todos.incompleteTodos.map((todo, index) => (
          <Fade key={index} in={isOpen} delay={0.1}>
            <IncompleteTodoItem todo={todo} index={index} />
          </Fade>
        ))}
      </List>
    </BoxAreaWithTitle>
  );
});
