import React from 'react';

class TasksToDo extends React.Component {

    render() {
      return (
        <div className="tasksToDo col-12">
            <div className="row">
              <input type="checkbox" />
              {this.props.item.description}
              <div className="editButton"><input type="button" className="btn btn-outline-secondary btn-sm" value="Edit" /></div>
              <div className="deleteButton"><input type="button" className="btn btn-outline-secondary btn-sm" value="Delete" /></div>
            </div>
          </div>
      );
    }
  }

  export default TasksToDo;