import * as actions from '../actions';

const initialState =  {
  title: null,
  description: null,
  deadline: null,
  status: null
};

export default function(state = initialState, action) {
  switch (action.type){
    default:
      return state;
  }
}
