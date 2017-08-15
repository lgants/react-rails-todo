export const SHOW_TASK_FORM = 'SHOW_TASK_FORM';
export const API_URL = '/api';

export function showTaskForm() {
  return function(dispatch, getState) {
    dispatch({
      type: SHOW_TASK_FORM,
      showTaskForm: getState().tasks.showTaskForm
    });
  }
}

export const SUBMIT_TASK = 'SUBMIT_TASK';
export const SUBMIT_TASK_SUCCESS = 'SUBMIT_TASK_SUCCESS';
export const SUBMIT_TASK_FAILURE = 'SUBMIT_TASK_FAILURE';

export function submitTask(task = null) {
  return function(dispatch) {
    fetch(API_URL + `/tasks`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(task)
    })
    .then(response => response.json())
    .then(json => {
      if (!json || !json.status || json.status >= 400) {
        throw json
      }
      dispatch(submitTaskSuccess(json.task));
    })
    .catch(errors => {
      dispatch(submitTaskFailure(errors));
    });
  }
}
export function submitTaskSuccess(task) {
  return function(dispatch, getState) {
    dispatch({
      type: SUBMIT_TASK_SUCCESS,
      task: {...task}
    }),
    dispatch({
      type: SHOW_TASK_FORM,
      showTaskForm: getState().tasks.showTaskForm
    })
  }
}
export function submitTaskFailure(errors) {
  return function(dispatch) {
    dispatch({
      type: SUBMIT_TASK_FAILURE,
      errors: errors
    })
  }
}


export const DESTROY_TASK = 'DESTROY_TASK';
export const DESTROY_TASK_SUCCESS = 'DESTROY_TASK_SUCCESS';
export const DESTROY_TASK_FAILURE = 'DESTROY_TASK_FAILURE';

export function destroyTask(task = null) {
  return function(dispatch) {
    fetch(API_URL + `/tasks/${task.id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(task)
    })
    .then(response => response.json())
    .then(json => {
      if (!json || !json.status || json.status >= 400) {
        throw json
      }
      dispatch(destroyTaskSuccess(json.task));
    })
    .catch(errors => {
      dispatch(destroyTaskFailure(errors));
    });
  }
}
export function destroyTaskSuccess(task) {
  return function(dispatch) {
    dispatch({
      type: DESTROY_TASK_SUCCESS,
      task: {...task}
    })
  }
}
export function destroyTaskFailure(errors) {
  return function(dispatch) {
    dispatch({
      type: DESTROY_TASK_FAILURE,
      errors: errors
    })
  }
}

export const SUBMIT_LIST = 'SUBMIT_LIST';
export const SUBMIT_LIST_SUCCESS = 'SUBMIT_LIST_SUCCESS';
export const SUBMIT_LIST_FAILURE = 'SUBMIT_LIST_FAILURE';

export function submitList(list = null) {
  return function(dispatch) {
    fetch(API_URL + `/lists`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(list)
    })
    .then(response => response.json())
    .then(json => {
      if (!json || !json.status || json.status >= 400) {
        throw json
      }
      dispatch(submitListSuccess(json.list));
    })
    .catch(errors => {
      dispatch(submitListFailure(errors));
    });
  }
}
export function submitListSuccess(list) {
  return function(dispatch) {
    dispatch({
      type: SUBMIT_LIST_SUCCESS,
      list: {...list}
    })
  }
}
export function submitListFailure(errors) {
  return function(dispatch) {
    dispatch({
      type: SUBMIT_LIST_FAILURE,
      errors: errors
    })
  }
}
