import * as actions from '../actions';

const initialState =  {
  collection: [],
  showTaskForm: false,
};

export default function(state = initialState, action) {
  switch (action.type){
    case actions.SHOW_TASK_FORM:
      return {
        ...state,
        showTaskForm: !action.showTaskForm,
      }
    case actions.SUBMIT_TASK_SUCCESS:
      return {
        ...state,
        collection: [...state.collection, action.task]
      }
    case actions.SUBMIT_TASK_FAILURE:
      return {
        ...state,
      }
    case actions.DESTROY_TASK_SUCCESS:
      return {
        ...state,
        collection: state.collection.filter((task) => {
          if (task.id == action.task.id) {
            return false;
          } else {
            return true;
          }
        })
      }
    case actions.DESTROY_TASK_FAILURE:
      return {
        ...state,
      }
    default:
      return state;
  }
}
