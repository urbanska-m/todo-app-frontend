import React from 'react';

class TasksToDo extends React.Component {

  deleteClicked = () => {
    this.props.deleteTaskFunc(this.props.item.id);
  }

  boxTicked = () => {

  }

  render() {
    return (
      <div className="tasksToDo col-12">
        <div className="row">
          <div className="tickboxes"><input type="checkbox" /></div>
          <div className="taskDesc">
            {this.props.item.description}
          </div>
          <div className="buttonGroup">
            <input type="button" className="btn btn-outline-secondary btn-sm" value="Edit" />
            <input type="button" className="btn btn-outline-secondary btn-sm" value="Delete" onClick={this.deleteClicked} />
          </div>
        </div>
      </div>
    );
  }
}

export default TasksToDo;