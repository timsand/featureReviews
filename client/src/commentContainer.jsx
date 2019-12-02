import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Comment from './comment.jsx';


const CommentContainer = (props) => {
  var comments = props.comments.map((val, i) => {
    return <Comment id={val.id} body={val.body} date={val.date} helpfulCount={val.helpfulCount} itemName={val.itemName} person={val.person} rating={val.rating} title={val.title} key={i} helpfulClicked={props.helpfulClicked} buttonClicked={val.buttonClicked} />
  })
  return (
    <div>
      <span>{props.comments.length} customer reviews</span>
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          variant="filled"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      <select>
        <option value="topReviews">Top Reviews</option>
        <option value="mostRecent">Most Recent</option>
      </select>
      {comments}
    </div>
  )
}

export default CommentContainer;