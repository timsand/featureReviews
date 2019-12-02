import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import CommentContainer from './commentContainer.jsx';

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      comments: []
    };
    this.getAllComments = this.getAllComments.bind(this);
  }

  getAllComments() {
    Axios.get('/comments')
    .then((data) => {
      var comments = data.data[0].comments;
      this.setState({comments: comments})
    })
  }


  componentDidMount() {
    this.getAllComments();
  }





  render() {
    return (
      <div>
        <p>
          Hello there General Kenobi..
        </p>
        <CommentContainer comments={this.state.comments}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('reviewContainer'))