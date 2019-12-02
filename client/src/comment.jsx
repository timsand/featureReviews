import React from 'react';
import Rating from '@material-ui/lab/Rating';
import BottomButtons from './BottomButtons.jsx';


const Comment = (props) => {
  return (
    <div className='commentBox'>
      <h5>{props.person}</h5>
      <h4>{props.title}</h4>
      <Rating name="testRating" value={props.rating} readOnly={true} size="small"/>
      <h5>{props.date}</h5>
      <h5>VERIFIED PURCHASE</h5>
      <p>{props.body}</p>
      <span>{props.helpfulCount} people found this helpful</span>
      <BottomButtons id={props.id} helpfulClicked={props.helpfulClicked} buttonClicked={props.buttonClicked}/>
    </div>
  )
}



export default Comment;