import React from 'react';
import HelpfulButton from './helpfulButton.jsx';


const Comment = (props) => {
  return (
    <div className='commentBox'>
      <h5>{props.person}</h5>
      <h4>{props.title}</h4>
      <span>{props.rating} RATING</span>
      <h5>{props.date} (DATE)</h5>
      <h5>VERIFIED PURCHASE</h5>
      <p>{props.body}</p>
      <span>{props.helpfulCount} people found this helpful</span>
      <HelpfulButton buttonClicked={false}/>
      <button>COMMENT</button>
      <button>REPORT ABUSE</button>
    </div>
  )
}



export default Comment;