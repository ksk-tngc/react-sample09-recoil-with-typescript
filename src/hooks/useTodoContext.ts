import { useContext } from 'react';
import { TodoContext } from '../providers/TodoProvider';

export const useTodoContext = () => useContext(TodoContext);
