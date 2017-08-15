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
    case actions.SUBMIT_TASK:
      return {
        ...state,
        collection: [...state.collection, action.task]
      }
    case actions.DESTROY_TASK:
      return {
        ...state,
        collection: state.collection.filter((task) => {
          if (task.headline == action.task.headline) {
            return false;
          } else {
            return true;
          }
        })
      }
    default:
      return state;
  }
}
