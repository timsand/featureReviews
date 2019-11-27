import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor() {
    super()
    this.state = {};
  }





  render() {
    return (
      <div>
        <p>
          Hello there General Kenobi..
        </p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('reviewContainer'))