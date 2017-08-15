import React from 'react';
import moment from 'moment'

export default function Task(props) {
  let overdue = Date.parse(props.task.deadline) < new Date().getTime();

  return (
    <div>
      <h2 className={ overdue ? "text-danger" : null }>{props.task.title}</h2>
      <p>{props.task.description}</p>
      <p>{moment(props.task.deadline).format('MM/DD/YYYY')}</p>
      <div className="row">
        <div className="col-sm-6">
          <button type="submit" className="btn btn-success btn-block" onClick={() => props.handleDestroyTask(props.task)}>Done</button>
        </div>
        <div className="col-sm-6">
          <button type="submit" className="btn btn-danger btn-block" onClick={() => props.handleDestroyTask(props.task)}>Delete</button>
        </div>
      </div>
    </div>
  );
}
