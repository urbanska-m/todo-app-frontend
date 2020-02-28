import React from 'react';

class TasksToDo extends React.Component {

  deleteClicked = () => {
    this.props.deleteTaskFunc(this.props.item.taskId);
  }

  markAsDone = () => {
    this.props.completedTaskFunc(this.props.item.taskId);
  }

 editTask = () => {
   this.props.editTaskFunc(this.props.item.taskId);
 }

  render() {
    return (
      <div className="tasksToDo col-12">
        <div className="row">
          <div className="tickboxes"><input type="checkbox" onClick={this.markAsDone} /></div>
          <div className="taskDesc">
            {this.props.item.taskDescription}
          </div>
          <div className="buttonGroup ml-auto">
            <input type="button" className="btn btn-outline-secondary btn-sm" value="Edit" onClick={this.editTask} />
            <input type="button" className="btn btn-outline-secondary btn-sm" value="Delete" onClick={this.deleteClicked} />
          </div>
        </div>
      </div>
    );
  }
}

export default TasksToDo;