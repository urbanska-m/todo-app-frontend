import React from 'react';
import NumberDoneSmall from './NumberDoneSmall';

class DoneSmall extends React.Component {

    render() {
      return (
        <div className="col-3">
            <div className="float-left" id="doneSmall">
              <span className="wordsSmall">Done<br /></span>
              <NumberDoneSmall />
            </div>
          </div>
      );
    }
  }

  export default DoneSmall;