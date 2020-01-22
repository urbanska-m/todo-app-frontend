import React from 'react';

class NumberDoneSmall extends React.Component {

    render() {
      return (
         <span className="numbersSmall"> {this.props.counterDone} </span>
      );
    }
  }

  export default NumberDoneSmall;