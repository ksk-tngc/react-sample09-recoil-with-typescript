import { Fade, List, useDisclosure } from '@chakra-ui/react';
import { memo, useEffect, VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { todoState } from '../../store/todoState';
import { BoxAreaWithTitle } from '../molecules/BoxAreaWithTitle';
import { CompleteTodoItem } from '../molecules/CompleteTodoItem';

/**
 * 完了したToDoエリア
 */
export const CompleteTodos: VFC = memo(() => {
  const todos = useRecoilValue(todoState);
  const { isOpen, onOpen } = useDisclosure();

  // Fadeのトリガー
  useEffect(() => onOpen(), [onOpen, todos]);

  return (
    <BoxAreaWithTitle bg="#bee0c2" title="完了したToDo">
      <List spacing="2">
        {todos.completeTodos.map((todo, index) => (
          <Fade key={index} in={isOpen} delay={0.1}>
            <CompleteTodoItem todo={todo} index={index} />
          </Fade>
        ))}
      </List>
    </BoxAreaWithTitle>
  );
});
