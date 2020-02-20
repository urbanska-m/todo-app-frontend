import React from 'react';
import TasksToDo from './TasksToDo';
import TasksDone from './TasksDone';

class TaskArea extends React.Component {

  render() {
    return (
      <div className="taskLists">
        <div className="outstandingTaskArea">
          {
            this.props.jobs.map(
              (taskItem) =>
                <TasksToDo
                  key={taskItem.id}
                  item={taskItem}
                  deleteTaskFunc={this.props.deleteTaskFunc}
                  completedTaskFunc={this.props.completedTaskFunc}
                  editTaskFunc={this.props.editTaskFunc}
                  />
            )}
        </div>
        <div className="doneTaskArea">
          {
            this.props.doneJobs.map(
              (taskItem) =>
                <TasksDone 
                key={taskItem.id} 
                item={taskItem} 
                deleteTaskFunc={this.props.deleteTaskFunc}
                markIncompleteFunc={this.props.markIncompleteFunc}
                 />
            )
          }
        </div>
      </div>
    );
  }
}

export default TaskArea;