import React from 'react';
import Sidebar from './Sidebar';
import AddNewTask from './AddNewTask';
import TaskArea from './TaskArea';

class App extends React.Component {

  state = {
    tasks: [
      { id: 1, description: "Buy groceries", completed: false },
      { id: 2, description: "Iron shirts", completed: false },
      { id: 3, description: "Tidy room", completed: false },
      { id: 4, description: "Walk the dog", completed: true }
    ]
  };

  render() {
    return (
      <body>
        <div className="container-fluid">
          <div className="row">
            <Sidebar counterOutstanding={this.state.tasks.length} />
            <div className="col-11 col-md-7">
              <div className="mainBody">
                <AddNewTask />
                <TaskArea jobs={this.state.tasks} />
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default App;
