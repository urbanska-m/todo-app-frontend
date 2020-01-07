import React from 'react';
import Sidebar from './Sidebar';
import AddNewTask from './AddNewTask';
import TaskArea from './TaskArea';

class App extends React.Component {

  render() {
    return (
      <body>
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <div className="col-11 col-md-7">
              <div className="mainBody">
                <AddNewTask />
                <TaskArea />
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default App;
