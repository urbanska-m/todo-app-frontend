import React from 'react';
import TasksToDo from './TasksToDo';
import TasksDone from './TasksDone';

class TaskArea extends React.Component {

    render() {
      return (
        <div>
            <TasksToDo />
            <TasksDone />
        </div>
      );
    }
  }

  export default TaskArea;