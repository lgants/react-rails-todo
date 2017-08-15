import React from 'react';
import Task from './Task';

export default function List(props) {
  const panelStyle = {
    height: '85vh',
    overflowY: 'auto'
  }

  const listStyle = {
    marginBottom: '0px'
  }

  const tasks = props.tasks.map(
    (task, i) => {
      return (
        <li className="list-group-item" key={i}>
          <Task task={task} handleDestroyTask={props.handleDestroyTask}/>
        </li>
      )
    }
  )

  return (
    <div>
      <div className="panel panel-default" style={panelStyle} >
        <div className="panel-body">
          <ul className="list-group" style={listStyle}>
            {tasks}
          </ul>
        </div>
      </div>
    </div>
  );
}
