import React from 'react';

export default function Task(props) {
  return (
    <div>
      <h2>{props.task.title}</h2>
      <p>{props.task.description}</p>
      <p>{props.task.deadline}</p>
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
