import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import CommentContainer from './commentContainer.jsx';
import Sidebar from './sidebar.jsx';
import PictureModal from './PictureModal.jsx';
import ProductInformation from './ProductInformation.jsx';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      comments: [],
      totalRating: 0,
      title: '',
      disclaimer: undefined,
      directions: undefined,
      foodIngredients: undefined,
      safetyWarning: undefined,
      category: undefined,
      featureHelpfulClicked: false,
      commentNumberToDisplay: 10,
      categoryRatings: undefined,
      individualRatings: [],
      filteredComments: [],
      totalPictures: []
    };
    this.getAllComments = this.getAllComments.bind(this);
    this.helpfulClicked = this.helpfulClicked.bind(this);
    this.writeReview = this.writeReview.bind(this);
    this.filterByStars = this.filterByStars.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
    this.sortByTop = this.sortByTop.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
    this.showAllReviews = this.showAllReviews.bind(this);
    this.sidebarHelpfulClicked = this.sidebarHelpfulClicked.bind(this);
  }


  getAllComments(id=1) {
    Axios.get(`comments/${id}`, {baseURL: "http://gammazonreviews.us-east-2.elasticbeanstalk.com/"})
      .then((data) => {
        var comments = data.data[0].comments;
        var title = data.data[0].name;
        var categoryRatings = data.data[0].categoryRatings
        var category = data.data[0].category;
        var disclaimer = data.data[0].disclaimerText;
        var directions = data.data[0].directions;
        var foodIngredients = data.data[0].foodIngredients;
        var safetyWarning = data.data[0].safetyWarning;
        //have to sort here again instead of calling sortByTop, as both functions want to setState... Could be refactored...
        comments.sort((a, b) => {
          return b.helpfulCount - a.helpfulCount;
        });
        comments.forEach((comment) => {
          comment.date = new Date(comment.date);
        })
        var totalPictures = data.data[0].totalPictures
        var average = data.data[0].average
        var individualRatings = data.data[0].individualRatings;
        this.setState({ 
          disclaimer: disclaimer,
          directions: directions,
          foodIngredients: foodIngredients,
          safetyWarning: safetyWarning,
          comments: comments, 
          category: category,
          totalRating: average, 
          title: title, 
          categoryRatings: categoryRatings,
          individualRatings: individualRatings, 
          totalPictures: totalPictures 
        })
      })
  }

  sortByDate() {
    const comments = this.state.comments;
    const sortedComments = comments.slice().sort((a, b) => {
      return b.date - a.date;
    })
    this.setState({ comments: sortedComments })
  }

  writeReview() {
    alert('This would have redirected you to the Gammazon reviews page!')
  }

  sortByTop() {
    const comments = this.state.comments;
    const commentsCopy = comments.slice();
    commentsCopy.sort((a, b) => {
      return b.helpfulCount - a.helpfulCount;
    })
    this.setState({ comments: commentsCopy })
  }

  clearFilter() {
    this.setState({ filteredComments: [] })
  }

  filterByStars(val) {
    const comments = this.state.comments;
    const filteredComments = comments.filter((comment) => {
      return comment.rating === val;
    })
    this.setState({ filteredComments: filteredComments })
  }

  showAllReviews() {
    this.setState({commentNumberToDisplay: this.state.comments.length})
  }

  sidebarHelpfulClicked() {
    this.setState({featureHelpfulClicked: true});
  }


  helpfulClicked(event) {
    var id = event.target.id;
    var comments = this.state.comments;
    var itemName;
    var index;

    //bugged for db update
    comments.forEach((comment, idx) => {
      if (comment.id == id) {
        index = idx;
        itemName = comment.itemName;
        comment.buttonClicked = true;
      }
    })
    Axios.patch('comments', {
      id: index,
      itemName: itemName
    }, {baseURL: "http://gammazonreviews.us-east-2.elasticbeanstalk.com/"})
    this.setState({ comments: comments })
  }

  handleSortChange(event) {
    if (event.target.value === 'mostRecent') {
      this.sortByDate();
    } else {
      this.sortByTop();
    }
  }


  componentDidMount() {
    let idText = window.location.search;
    if (idText) {
      let croppedId = idText.substring((idText.indexOf('=') + 1));
      croppedId = Number(croppedId);
      this.getAllComments(croppedId)
    } else {
      this.getAllComments();
    }
  }



  render() {

    return (


      <div>
        <div className="tsBigSeperator"></div>
        <ProductInformation 
          category={this.state.category}
          disclaimer={this.state.disclaimer}
          directions={this.state.directions}
          foodIngredients={this.state.foodIngredients}
          safetyWarning={this.state.safetyWarning}
        />
        <div className="tsBigSeperator"></div>
        <div id="tsSubReviewContainer">
          <Sidebar 
            filterByStars={this.filterByStars}
            featureHelpfulClicked={this.state.featureHelpfulClicked}
            sidebarHelpfulClicked={this.sidebarHelpfulClicked}
            totalRating={this.state.totalRating} 
            individualRatings={this.state.individualRatings} 
            totalComments={this.state.comments.length}
            categoryRatings={this.state.categoryRatings} 
            writeReview={this.writeReview}
          />
          <div>
          {this.state.totalPictures.length ? (
            <PictureModal 
              title={this.state.title} 
              totalPictures={this.state.totalPictures} 
              comments={this.state.comments} 
            />
          ) : (null)}
          {this.state.filteredComments.length ? (
            <CommentContainer 
              showAllReviews={this.showAllReviews} 
              comments={this.state.filteredComments} 
              commentNumberToDisplay={this.state.commentNumberToDisplay} 
              helpfulClicked={this.helpfulClicked} 
              clearFilter={this.clearFilter} 
              writeReview={this.writeReview}
            />
          ) : (
            <CommentContainer 
              showAllReviews={this.showAllReviews} 
              handleSortChange={this.handleSortChange} 
              comments={this.state.comments} 
              commentNumberToDisplay={this.state.commentNumberToDisplay} 
              helpfulClicked={this.helpfulClicked} 
              sortByDate={this.sortByDate} 
              writeReview={this.writeReview}
            />
          )
          }
        </div>
      </div>
      <div className="tsBigSeperator"></div>

    </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('tsReviewContainer'))