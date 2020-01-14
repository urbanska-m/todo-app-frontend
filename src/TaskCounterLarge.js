import React from 'react';

class TaskCounterLarge extends React.Component {

    render() {
      return (
        <div className="d-none d-md-block col-md-12">
            <div id="taskCounter">
              To do: {this.props.counterOutstanding} <br />
              Done: 1
            </div>
          </div>
      );
    }
  }

  export default TaskCounterLarge;