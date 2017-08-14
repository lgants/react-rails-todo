import React from 'react';
import Task from './Task';

export default function List() {
  return (
    <div>
      <h1>List</h1>
      <ul>
        <li>
          <Task />
        </li>
      </ul>
    </div>
  );
}
