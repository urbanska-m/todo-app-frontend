import React from 'react';
import NumberToDoSmall from './NumberToDoSmall';

class OutstandingSmall extends React.Component {

  render() {
    return (
      <div className="col-3">
          <div className="float-right" id="outstandingSmall">
              <span className="wordsSmall">To do<br /></span>
              <NumberToDoSmall />
          </div>
      </div>
    );
  }
}

export default OutstandingSmall;