import { combineReducers } from 'redux';
import ListReducer from './list';
import TaskReducer from './task';
import UserReducer from './user';

const rootReducer = combineReducers({
  users: UserReducer,
  lists: ListReducer,
  task: TaskReducer
});

export default rootReducer;
