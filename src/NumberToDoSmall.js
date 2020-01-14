import React from 'react';

class NumberToDoSmall extends React.Component {

    render() {
      return (
         <span className="numbersSmall"> {this.props.counterOutstanding} </span>
      );
    }
  }

  export default NumberToDoSmall;