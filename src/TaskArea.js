import React from 'react';
import TasksToDo from './TasksToDo';
import TasksDone from './TasksDone';

class TaskArea extends React.Component {

    render() {
      return (
        <div>
            {
              this.props.jobs.map(
                (taskItem) =>
                <TasksToDo key={taskItem.id} item={taskItem} deleteTaskFunc={this.props.deleteTaskFunc}/>
              )
            }
            {
              this.props.doneJobs.map(
                (taskItem) =>
                <TasksDone key={taskItem.id} item={taskItem} />
              )
            }
            
        </div>
      );
    }
  }

  export default TaskArea;