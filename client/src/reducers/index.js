import { combineReducers } from 'redux';
import ListReducer from './list';
import TaskReducer from './task';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  lists: ListReducer,
  tasks: TaskReducer,
  form: formReducer
});

export default rootReducer;
