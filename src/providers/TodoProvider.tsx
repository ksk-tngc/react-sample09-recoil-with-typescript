import {
  createContext,
  Dispatch,
  memo,
  ReactNode,
  SetStateAction,
  useState,
  VFC,
} from 'react';
import { Todo } from '../types/Todo';
import { Todos } from '../types/Todos';

// Context Type
type TodoContextType = {
  inputTodo: Todo;
  setInputTodo: Dispatch<SetStateAction<Todo>>;
  todos: Todos;
  setTodos: Dispatch<SetStateAction<Todos>>;
};

// Context
export const TodoContext = createContext<TodoContextType>(
  {} as TodoContextType
);

// Provider Component
export const TodoProvider: VFC<{ children: ReactNode }> = memo((props) => {
  const { children } = props;

  const [inputTodo, setInputTodo] = useState<Todo>('');
  const [todos, setTodos] = useState<Todos>({
    incompleteTodos: [],
    completeTodos: [],
  });

  return (
    <TodoContext.Provider value={{ inputTodo, setInputTodo, todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
});
