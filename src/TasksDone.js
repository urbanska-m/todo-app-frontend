import React from 'react';

class TasksDone extends React.Component {

  deleteClicked = () => {
    this.props.deleteTaskFunc(this.props.item.id);
  }

    render() {
      return (
        <div className="tasksDone col-12">
            <div className="row">
              <div className="tickboxes"><input type="checkbox" checked /></div>
              {this.props.item.description}
              <div className="buttonGroup">
              <div className="editButton"><input type="button" className="btn btn-outline-light btn-sm" value="Edit" /></div>
              <div className="deleteButton"><input type="button" className="btn btn-outline-light btn-sm" value="Delete" onClick={this.deleteClicked} /></div>
              </div>
            </div>
          </div>
      );
    }
  }

  export default TasksDone;