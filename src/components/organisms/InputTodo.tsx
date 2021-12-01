import { HStack } from '@chakra-ui/react';
import { ChangeEvent, memo, useCallback, VFC } from 'react';
import { useRecoilState } from 'recoil';
import { useTodos } from '../../hooks/useTodos';
import { inputTodoState } from '../../store/inputTodoState';
import { BoxArea } from '../atoms/BoxArea';
import { InputText } from '../atoms/InputText';
import { PrimaryButton } from '../atoms/PrimaryButton';

/**
 * ToDo入力エリア
 */
export const InputTodo: VFC = memo(() => {
  const [inputTodo, setInputTodo] = useRecoilState(inputTodoState);
  const { addTodo } = useTodos();

  const onChangeInputTodo = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setInputTodo(e.target.value),
    [setInputTodo]
  );

  /** 追加ボタン */
  const onClickAdd = useCallback(() => addTodo(), [addTodo]);

  return (
    <BoxArea bg="#a0d8ef">
      <HStack spacing="3">
        <InputText
          placeholder="ToDoを入力"
          value={inputTodo}
          onChange={(e) => onChangeInputTodo(e)}
        />
        <PrimaryButton onClick={onClickAdd} disabled={inputTodo === ''}>
          追加
        </PrimaryButton>
      </HStack>
    </BoxArea>
  );
});
