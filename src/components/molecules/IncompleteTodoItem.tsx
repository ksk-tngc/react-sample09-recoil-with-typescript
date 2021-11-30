import { HStack, ListIcon, ListItem, Text } from '@chakra-ui/react';
import { memo, useCallback, VFC } from 'react';
import { BsPlayFill as ListItemIcon } from 'react-icons/bs';
import { useTodos } from '../../hooks/useTodos';
import { PrimaryButton } from '../atoms/PrimaryButton';

type Props = {
  todo: string;
  index: number;
};

export const IncompleteTodoItem: VFC<Props> = memo((props) => {
  const { todo, index } = props;

  const { completeTodo, deleteTodo } = useTodos();

  /** 完了ボタン */
  const onClickComplete = useCallback(
    (index: number) => completeTodo(index),
    [completeTodo]
  );

  /** 削除ボタン */
  const onClickDelete = useCallback(
    (index: number) => deleteTodo(index),
    [deleteTodo]
  );

  return (
    <ListItem>
      <HStack>
        <ListIcon as={ListItemIcon} />
        <Text fontSize="lg" pe="4">
          {todo}
        </Text>
        <PrimaryButton onClick={() => onClickComplete(index)}>
          完了
        </PrimaryButton>
        <PrimaryButton onClick={() => onClickDelete(index)}>削除</PrimaryButton>
      </HStack>
    </ListItem>
  );
});
