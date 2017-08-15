export const SHOW_TASK_FORM = 'SHOW_TASK_FORM';

export function showTaskForm() {
  return function(dispatch, getState) {
    dispatch({
      type: SHOW_TASK_FORM,
      showTaskForm: getState().tasks.showTaskForm
    });
  }
}

export const SUBMIT_TASK = 'SUBMIT_TASK';

export function submitTask(task = null) {
  return function(dispatch, getState) {
    dispatch({
      type: SUBMIT_TASK,
      task: {...task}
    }),
    dispatch({
      type: SHOW_TASK_FORM,
      showTaskForm: getState().tasks.showTaskForm
    })
  }
}

export const DESTROY_TASK = 'DESTROY_TASK';

export function destroyTask(task = null) {
  return function(dispatch, getState) {
    dispatch({
      type: DESTROY_TASK,
      task: task
    })
  }
}
