import React from 'react';

class AddNewTask extends React.Component {

    render() {
      const {item, handleChange, handleSubmit, updateTask, editItem} = this.props
      return (
        <div className="row">
            <div className="inputField col-10">
                <input value={item} className="form-control" placeholder="New task..." minLength="1" maxLength="100" onChange={handleChange} />
            </div>
            <div className="addButton col-1">
                <input type="submit" className="btn btn-light" value={editItem ? 'Update' : 'Add'} onClick={editItem ? updateTask : handleSubmit}/>
            </div>
        </div>
      );
    }
  }

  export default AddNewTask;