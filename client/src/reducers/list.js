import * as actions from '../actions';

const initialState =  {
  collection: [],
};

export default function(state = initialState, action) {
  switch (action.type){
    case actions.SUBMIT_LIST_SUCCESS:
      return {
        ...state,
        collection: [action.list]
      }
    case actions.SUBMIT_LIST_FAILURE:
      return {
        ...state,
      }
    default:
      return state;
  }
}
