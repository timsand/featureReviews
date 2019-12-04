import React from 'react';
import Rating from '@material-ui/lab/Rating';


const Sidebar = (props) => {
  //Under span is where the graph will go..
  const oneStarRatings = props.individualRatings[0] === undefined ? 0 : (Math.floor((props.individualRatings[0].oneStarRatings / props.totalComments) * 100));
  const twoStarRatings = props.individualRatings[0] === undefined ? 0 : (Math.floor((props.individualRatings[1].twoStarRatings / props.totalComments) * 100));
  const threeStarRatings = props.individualRatings[0] === undefined ? 0 : (Math.floor((props.individualRatings[2].threeStarRatings / props.totalComments) * 100));
  const fourStarRatings = props.individualRatings[0] === undefined ? 0 : (Math.floor((props.individualRatings[3].fourStarRatings / props.totalComments) * 100));
  const fiveStarRatings = props.individualRatings[0] === undefined ? 0 : (Math.floor((props.individualRatings[4].fiveStarRatings / props.totalComments) * 100));
  const totalRating = Math.round(props.totalRating * 10) / 10;
  // oneStarRatings = oneStarRatings * 100;
  return (
    <div>
      <div>
        <h4 id="tsCustomerTitle">Customer reviews</h4>
        <div className="tsHistogramTitle">
          <Rating name="sidebarStars" value={totalRating} readOnly={true} precision={0.1} size="medium" />
          <span class="tsHistogramRatingOverview">{totalRating} out of 5</span>
        </div>
        <span id="tsHistogramRatingCount">{props.totalComments} customer ratings</span>
        <div className="tsHistogramContainer" title={`5 stars representing ${fiveStarRatings}% of rating`}>
          <a class="tsHistogramStars">5 star</a>
          <div className="tsHistogramBarContainer">
            <div className="tsHistogramBar" style={{ width: `${fiveStarRatings}%` }}></div>
          </div>
          <a className="tsHistogramPercents">{fiveStarRatings}%</a>
        </div>
        <div className="tsHistogramContainer" title={`4 stars representing ${fourStarRatings}% of rating`}>
          <a class="tsHistogramStars">4 star</a>
          <div className="tsHistogramBarContainer">
            <div className="tsHistogramBar" style={{ width: `${fourStarRatings}%` }}></div>
          </div>
          <a className="tsHistogramPercents">{fourStarRatings}%</a>
        </div>
        <div className="tsHistogramContainer" title={`3 stars representing ${threeStarRatings}% of rating`}>
          <a class="tsHistogramStars">3 star</a>
          <div className="tsHistogramBarContainer">
            <div className="tsHistogramBar" style={{ width: `${threeStarRatings}%` }}></div>
          </div>
          <a className="tsHistogramPercents">{threeStarRatings}%</a>
        </div>
        <div className="tsHistogramContainer" title={`2 stars representing ${twoStarRatings}% of rating`}>
          <a class="tsHistogramStars">2 star</a>
          <div className="tsHistogramBarContainer">
            <div className="tsHistogramBar" style={{ width: `${twoStarRatings}%` }}></div>
          </div>
          <a className="tsHistogramPercents">{twoStarRatings}%</a>
        </div>
        <div className="tsHistogramContainer" title={`1 stars representing ${oneStarRatings}% of rating`}>
          <a class="tsHistogramStars">1 star</a>
          <div className="tsHistogramBarContainer">
            <div className="tsHistogramBar" style={{ width: `${oneStarRatings}%` }}></div>
          </div>
          <a className="tsHistogramPercents">{oneStarRatings}%</a>
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




//{(props.individualRatings[4].fiveStarRatings) / (props.totalComments)}

/*

style={{width: `${props.individualRatings[4].fiveStarRatings}%`}}
style={{width: `${props.individualRatings[3].fourStarRatings}%`}}
style={{width: `${props.individualRatings[2].threeStarRatings}%`}}
style={{width: `${props.individualRatings[1].twoStarRatings}%`}}
style={{width: `${props.individualRatings[0].oneStarRatings}%`}}


*/