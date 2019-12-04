import React from 'react';
import Rating from '@material-ui/lab/Rating';


const Sidebar = (props) => {
  //Under span is where the graph will go..
  return (
    <div>
      <div>
        <h4>Customer reviews</h4>
        <Rating name="sidebarStars" value={props.totalRating} readOnly={true} precision={0.1} size="medium"/>
        <span>{props.totalRatings}</span>
        <table>
          <tbody>
            <tr>
              <td>5 star</td>
              <td className="tsTableDataBar"></td>
              <td>Percentage</td>
            </tr>
            <tr>
              <td>4 star</td>
              <td>Bar</td>
              <td>Percentage</td>
            </tr>
            <tr>
              <td>3 star</td>
              <td>Bar</td>
              <td>Percentage</td>
            </tr>
            <tr>
              <td>2 star</td>
              <td>Bar</td>
              <td>Percentage</td>
            </tr>
            <tr>
              <td>1 star</td>
              <td>Bar</td>
              <td>Percentage</td>
            </tr>
          </tbody>
        </table>
        <div className="tsTestDiv">
          <div>5 star</div>
          <div className="tsBarContainer">
            <div className="tsBar">...</div>
          </div>
          <div>Percentage</div>
        </div>
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