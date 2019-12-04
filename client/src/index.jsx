import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import CommentContainer from './commentContainer.jsx';
import Sidebar from './sidebar.jsx';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      comments: [],
      totalRating: 0
    };
    this.getAllComments = this.getAllComments.bind(this);
    this.helpfulClicked = this.helpfulClicked.bind(this);
    this.writeReview = this.writeReview.bind(this);
  }

  getAllComments() {
    Axios.get('/comments')
      .then((data) => {
        var comments = data.data[0].comments;
        var average = data.data[0].average
        this.setState({ comments: comments, totalRating: average })
      })
  }

  writeReview() {
    //TODO
    //Need to find a way to render this on the page, without redirects
  }



  helpfulClicked(event) {
    var id = event.target.id;
    var comments = this.state.comments;
    var itemName = comments[id].itemName;
    comments[id].buttonClicked = true;
    Axios.patch('/comments', {
      id: id,
      itemName: itemName
    })
    this.setState({ comments: comments })
  }


  componentDidMount() {
    this.getAllComments();
  }



  render() {
    return (
      <div id="tsSubReviewContainer">
        <Sidebar totalRating={this.state.totalRating}/>
        <CommentContainer comments={this.state.comments} helpfulClicked={this.helpfulClicked} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('tsReviewContainer'))