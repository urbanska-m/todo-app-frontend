import React from 'react';

class AddNewTask extends React.Component {

    render() {
      return (
        <div className="row">
            <div className="inputField col-10">
                <input type="text" className="form-control" placeholder="New task..." minLength="1" maxLength="100" />
            </div>
            <div className="addButton col-1">
                <input type="submit" className="btn btn-light" value="Add" />
            </div>
        </div>
      );
    }
  }

  export default AddNewTask;