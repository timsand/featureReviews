import React from 'react';
import Rating from '@material-ui/lab/Rating'


const ByFeature = (props) => {
  let mappedCategories;

  if (props.categoryRatings) {
    mappedCategories = Object.keys(props.categoryRatings).map(function(key, index) {
      return (
        <div className="tsFeatureSubContainer" key={'div' + index}>
          <span className="tsSideBarSubtitle" key={'span1' + index}>{key}</span>
          <div>
            <Rating name={key} value={props.categoryRatings[key].Overall} readOnly={true} precision={0.2} size="small" key={key}/>
            <span className="tsSideBarTextRating">{(props.categoryRatings[key].Overall).toFixed(1)}</span>
          </div>
        </div>
      )
    });
  }

  return (
    <div>
      <h3 className="tsSideBarHeader">By Feature</h3>
      {mappedCategories}
      <div className="tsSeperator"></div>
    </div>
  )
}


export default ByFeature;