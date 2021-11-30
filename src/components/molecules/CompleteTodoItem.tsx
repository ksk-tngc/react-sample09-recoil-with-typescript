import { HStack, ListIcon, ListItem, Text } from '@chakra-ui/react';
import { memo, useCallback, VFC } from 'react';
import { BsPlayFill as ListItemIcon } from 'react-icons/bs';
import { useTodos } from '../../hooks/useTodos';
import { PrimaryButton } from '../atoms/PrimaryButton';

type Props = {
  todo: string;
  index: number;
};

export const CompleteTodoItem: VFC<Props> = memo((props) => {
  const { todo, index } = props;

  const { returnTodo } = useTodos();

  /** 戻すボタン */
  const onClickReturn = useCallback(
    (index: number) => returnTodo(index),
    [returnTodo]
  );

  return (
    <ListItem>
      <HStack>
        <ListIcon as={ListItemIcon} />
        <Text fontSize="lg" pe="4">
          {todo}
        </Text>
        <PrimaryButton onClick={() => onClickReturn(index)}>戻す</PrimaryButton>
      </HStack>
    </ListItem>
  );
});
