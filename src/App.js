import React from 'react';
import Sidebar from './Sidebar';

class App extends React.Component {

  render() {
    return (
      <body>
        <div class="container-fluid">
          <div class="row">
            <Sidebar />
          </div>
        </div>
      </body>
    );
  }
}

export default App;
