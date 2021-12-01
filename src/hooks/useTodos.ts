import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { inputTodoState } from '../store/inputTodoState';
import { todoState } from '../store/todoState';
import { Todos } from '../types/Todos';

export const useTodos = () => {
  // Global state by Recoil
  const [inputTodo, setInputTodo] = useRecoilState(inputTodoState);
  const [todos, setTodos] = useRecoilState(todoState);

  /** ToDo追加 */
  const addTodo = useCallback(() => {
    const newTodos: Todos = {
      incompleteTodos: [...todos.incompleteTodos, inputTodo],
      completeTodos: [...todos.completeTodos],
    };
    setTodos(newTodos);
    setInputTodo('');
  }, [inputTodo, setInputTodo, setTodos, todos]);

  /** ToDo完了 */
  const completeTodo = useCallback(
    (index: number) => {
      const targetTodo = todos.incompleteTodos[index];
      const newTodos: Todos = {
        incompleteTodos: [...todos.incompleteTodos],
        completeTodos: [...todos.completeTodos],
      };
      newTodos.incompleteTodos.splice(index, 1);
      newTodos.completeTodos.push(targetTodo);
      setTodos(newTodos);
    },
    [setTodos, todos]
  );

  /** ToDo削除 */
  const deleteTodo = useCallback(
    (index: number) => {
      const newTodos: Todos = {
        incompleteTodos: [...todos.incompleteTodos],
        completeTodos: [...todos.completeTodos],
      };
      newTodos.incompleteTodos.splice(index, 1);
      setTodos(newTodos);
    },
    [setTodos, todos]
  );

  /** 未完了のToDoに戻す */
  const returnTodo = useCallback(
    (index: number) => {
      const targetTodo = todos.completeTodos[index];
      const newTodos: Todos = {
        incompleteTodos: [...todos.incompleteTodos],
        completeTodos: [...todos.completeTodos],
      };
      newTodos.completeTodos.splice(index, 1);
      newTodos.incompleteTodos.push(targetTodo);
      setTodos(newTodos);
    },
    [setTodos, todos]
  );

  return { addTodo, completeTodo, deleteTodo, returnTodo };
};
