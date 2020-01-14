import React from 'react';
import OutstandingSmall from './OutstandingSmall';
import Title from './Title';
import TaskCounterLarge from './TaskCounterLarge';
import DoneSmall from './DoneSmall';

class Sidebar extends React.Component {

    render() {
      return (
         <div className="col-12 col-md-4">
           <div className="row" id="sidebar">
             <OutstandingSmall counterOutstanding={this.props.counterOutstanding} />
             <Title />
             <TaskCounterLarge counterOutstanding={this.props.counterOutstanding} />
             <DoneSmall />
           </div>
         </div>
      );
    }
  }

  export default Sidebar;