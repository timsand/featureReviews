import React from 'react';
import Comment from './comment.jsx';
import { Hidden } from '@material-ui/core';


const CommentContainer = (props) => {
  let comments = props.comments.map((val, i) => {
    return <Comment
      id={val.id} body={val.body} date={val.date} helpfulCount={val.helpfulCount} itemName={val.itemName} person={val.person[0]} rating={val.rating}
      title={val.title} key={i} helpfulClicked={props.helpfulClicked} buttonClicked={val.buttonClicked} avatarUrl={val.person[1]} verified={val.verified}>
    </Comment>
  })
  let renderedComments = comments.splice(0, props.commentNumberToDisplay);
  return (
    <div id="tsMasterCommentContainer">
      <div id="tsCommentTopBarContainer">
        <span>{props.comments.length} customer reviews</span>
        <select id="tsCommentDropDown" onChange={(e) => { props.handleSortChange(e) }}>
          <option value="topReviews">Top Reviews</option>
          <option value="mostRecent">Most Recent</option>
        </select>
        <div>
          <a id="tsClearFilter" onClick={props.clearFilter} style={props.clearFilter ? { visibility: 'visible' } : { visibility: 'hidden' }}>Clear filter</a>
        </div>
      </div>
      {renderedComments}
      <div className="tsBottomCommentBox">
        There are {props.comments.length} customer reviews and {props.numberOfRatings} customer ratings.
      </div>
      <div id="tsBottomCommentButtonsContainer">
        <a id="tsShowAllReviews" onClick={props.showAllReviews}>See all customer reviews</a>
        <button className="tsCommentBoxSubmitReview">Write a customer review</button>
      </div>
    </div>
  )
}

export default CommentContainer;