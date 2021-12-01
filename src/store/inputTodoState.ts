import { atom } from 'recoil';
import { Todo } from '../types/Todo';

export const inputTodoState = atom<Todo>({
  key: 'inputTodoState',
  default: '',
});
