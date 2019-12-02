import React from 'react';


const Comment = (props) => {
  return (
    <div class='commentBox'>
      <h5>{props.person}</h5>
      <h4>{props.title}</h4>
      <h5>{props.date} (DATE)</h5>
      <h5>VERIFIED PURCHASE</h5>
      <p>{props.body}</p>
      <span>{props.helpfulCount} people found this helpful</span>
      <button>HELPFUL</button>
      <button>COMMENT</button>
      <button>REPORT ABUSE</button>
    </div>
  )
}



export default Comment;