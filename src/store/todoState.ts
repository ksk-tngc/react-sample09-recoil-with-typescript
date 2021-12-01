import { atom } from 'recoil';
import { Todos } from '../types/Todos';

export const todoState = atom<Todos>({
  key: 'todoState',
  default: {
    incompleteTodos: [],
    completeTodos: [],
  },
});
