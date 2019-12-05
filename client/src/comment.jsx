import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Avatar from '@material-ui/core/Avatar';
import BottomButtons from './BottomButtons.jsx';


const Comment = (props) => {
  if (props.verified) {
    return (
      <div className='tsCommentBox'>
        <div className="tsAvatarContainer">
          <Avatar>?</Avatar>
          <h5>{props.person}</h5>
        </div>
        <div className="tsReviewTitleContainer">
          <Rating name="testRating" value={props.rating} readOnly={true} size="small" />
          <span className="tsReviewTitle">{props.title}</span>
        </div>
        <h5 className="tsReviewDate">{props.date}</h5>
        <h5 className="tsVerifiedPurchase">Verified Purchase</h5>
        <p>{props.body}</p>
        <span className="tsHelpfulCount">{props.helpfulCount} people found this helpful</span>
        <BottomButtons id={props.id} helpfulClicked={props.helpfulClicked} buttonClicked={props.buttonClicked} />
      </div>
    )
  } else {
    return (
      <div className='tsCommentBox'>
        <div className="tsAvatarContainer">
          <Avatar>?</Avatar>
          <h5>{props.person}</h5>
        </div>
        <div className="tsReviewTitleContainer">
          <Rating name="testRating" value={props.rating} readOnly={true} size="small" />
          <span className="tsReviewTitle">{props.title}</span>
        </div>
        <h5 className="tsReviewDate">{props.date}</h5>
        <p>{props.body}</p>
        <span className="tsHelpfulCount">{props.helpfulCount} people found this helpful</span>
        <BottomButtons id={props.id} helpfulClicked={props.helpfulClicked} buttonClicked={props.buttonClicked} />
      </div>
    )
  }
}



export default Comment;