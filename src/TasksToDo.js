import React from 'react';

class TasksToDo extends React.Component {

  deleteClicked = () => {
    this.props.deleteTaskFunc(this.props.item.id);
  }

  markAsDone = () => {
    this.props.completedTaskFunc(this.props.item.id);
  }

  render() {
    return (
      <div className="tasksToDo col-12">
        <div className="row">
          <div className="tickboxes"><input type="checkbox" onClick={this.markAsDone}/></div>
          <div className="taskDesc">
            {this.props.item.description}
          </div>
          <div className="buttonGroup ml-auto">
            <input type="button" className="btn btn-outline-secondary btn-sm" value="Edit" />
            <input type="button" className="btn btn-outline-secondary btn-sm" value="Delete" onClick={this.deleteClicked} />
          </div>
        </div>
      </div>
    );
  }
}

export default TasksToDo;