import React from 'react';

class TasksDone extends React.Component {

  deleteClicked = () => {
    this.props.deleteTaskFunc(this.props.item.taskId);
  }

  markIncomplete = () => {
    this.props.markIncompleteFunc(this.props.item.taskId);
  }

  render() {
    return (
      <div className="tasksDone col-12">
        <div className="row">
          <div className="tickboxes"><input type="checkbox" defaultChecked onClick={this.markIncomplete} /></div>
          <div className="taskDesc">
            {this.props.item.taskDescription}
          </div>
          <div className="buttonGroup ml-auto">
            <input type="button" className="btn btn-outline-light btn-sm" value="Delete" onClick={this.deleteClicked} />
          </div>
        </div>
      </div>
    );
  }
}

export default TasksDone;