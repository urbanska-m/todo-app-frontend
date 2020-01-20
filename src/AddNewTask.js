import React from 'react';

class AddNewTask extends React.Component {

  state = {
    taskDescription: "Enter your task..."
  }

  addTask = () => {
    this.props.addTaskFunc(this.state.taskDescription);
  }

  taskDescriptionChanged = (event) => {
    this.setState({
      taskDescription: event.target.value
    });
  }


    render() {
      return (
        <div className="row">
            <div className="inputField col-10">
                <input type="text" className="form-control" placeholder="New task..." minLength="1" maxLength="100" onChange={this.taskDescriptionChanged} />
            </div>
            <div className="addButton col-1">
                <input type="submit" className="btn btn-light" value="Add" onClick={this.addTask} />
            </div>
        </div>
      );
    }
  }

  export default AddNewTask;