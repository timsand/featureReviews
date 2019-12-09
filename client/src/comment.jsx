import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Avatar from '@material-ui/core/Avatar';
import BottomButtons from './BottomButtons.jsx';


const Comment = (props) => {
  let options = {month: 'long', day: 'numeric', year: 'numeric'};
  let date = new Intl.DateTimeFormat('en-US', options).format(props.date);

  if (props.verified) {
    return (
      <div className='tsCommentBox'>
        <div className="tsAvatarContainer">
          {props.avatarUrl === null ? 
            (<Avatar src='https://gammazon-users.s3.us-east-2.amazonaws.com/userItems/no-image-icon.png'></Avatar>) : 
            (<Avatar src={props.avatarUrl}></Avatar>)}
          <h5>{props.person}</h5>
        </div>
        <div className="tsReviewTitleContainer">
          <Rating name="testRating" value={props.rating} readOnly={true} size="small" />
          <span className="tsReviewTitle">{props.title}</span>
        </div>
        <h5 className="tsReviewDate">{date}</h5>
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
          {props.avatarUrl === null ? 
            (<Avatar src='https://gammazon-users.s3.us-east-2.amazonaws.com/userItems/no-image-icon.png'></Avatar>) : 
            (<Avatar src={props.avatarUrl}></Avatar>)}
          <h5>{props.person}</h5>
        </div>
        <div className="tsReviewTitleContainer">
          <Rating name="testRating" value={props.rating} readOnly={true} size="small" />
          <span className="tsReviewTitle">{props.title}</span>
        </div>
        <h5 className="tsReviewDate">{date}</h5>
        <p>{props.body}</p>
        <span className="tsHelpfulCount">{props.helpfulCount} people found this helpful</span>
        <BottomButtons id={props.id} helpfulClicked={props.helpfulClicked} buttonClicked={props.buttonClicked} />
      </div>
    )
  }
}



export default Comment;