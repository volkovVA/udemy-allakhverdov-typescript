import { combineReducers, Store } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
