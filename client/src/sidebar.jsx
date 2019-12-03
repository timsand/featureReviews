import React from 'react';
import Rating from '@material-ui/lab/Rating';


const Sidebar = (props) => {
  //Under span is where the graph will go..
  return (
    <div>
      <div>
        <h4>Customer reviews</h4>
        <Rating name="sidebarStars" value={props.totalRating} readOnly={true} size="medium"/>
        <span>{props.totalRatings}</span>
      </div>
      <div>
        <h5>Review this product</h5>
        <span>Share your thoughts with other customers</span>
        <button className="sidebarSubmitReview">Write a customer review</button>
      </div>
    </div>
  )
}



export default Sidebar;