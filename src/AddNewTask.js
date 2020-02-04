import React from 'react';

class AddNewTask extends React.Component {

  // state = {
  //   taskDescription: ""
  // };

  // addTask = () => {
  //   this.props.addTaskFunc(this.state.taskDescription);
  // }

  // taskDescriptionChanged = (event) => {
  //   this.setState({
  //     item: event.target.value
  //   });
  // }


    render() {
      const {item, handleChange, handleSubmit} = this.props
      return (
        <div className="row">
            <div className="inputField col-10">
                <input value={item} className="form-control" placeholder="New task..." minLength="1" maxLength="100" onChange={handleChange} />
            </div>
            <div className="addButton col-1">
                <input type="submit" className="btn btn-light" value="Add" 
                // onClick={this.addTask} 
                onClick={handleSubmit}/>
            </div>
        </div>
      );
    }
  }

  export default AddNewTask;