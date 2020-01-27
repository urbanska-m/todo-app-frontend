import React from 'react';
import TasksToDo from './TasksToDo';
import TasksDone from './TasksDone';

class TaskArea extends React.Component {

  render() {
    return (
      <div>
        <div className="outstandingTaskArea">
          {
            this.props.jobs.map(
              (taskItem) =>
                <TasksToDo
                  key={taskItem.id}
                  item={taskItem}
                  deleteTaskFunc={this.props.deleteTaskFunc}
                  completedTaskFunc={this.props.completedTaskFunc} />
            )}
        </div>
        <div className="doneTaskArea">
          {
            this.props.doneJobs.map(
              (taskItem) =>
                <TasksDone key={taskItem.id} item={taskItem} deleteTaskFunc={this.props.deleteTaskFunc} />
            )
          }
        </div>
      </div>
    );
  }
}

export default TaskArea;