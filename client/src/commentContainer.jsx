import React from 'react';
import Comment from './comment.jsx';


const CommentContainer = (props) => {
  var comments = props.comments.map((val, i) => {
    return <Comment body={val.body} date={val.date} helpfulCount={val.helpfulCount} itemName={val.itemName} person={val.person} rating={val.rating} title={val.title} key={i}/>
  })
  return (
    <div>
      {comments}
    </div>
  )
}

export default CommentContainer;