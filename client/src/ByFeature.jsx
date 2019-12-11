import React from 'react';
import Rating from '@material-ui/lab/Rating'


const ByFeature = (props) => {
  console.log(props);
  let mappedCategories;
  // if (props.categoryRatings) {
  //   let test = Object.keys(props.categoryRatings);
  //   mappedCategories = props.categoryRatings.map((categories, i) => {
  //     return <Rating value={categories.test[0].Overall} readOnly={true} precision={0.2} size="small"></Rating>
  //   })
  // }

  if (props.categoryRatings) {
    mappedCategories = Object.keys(props.categoryRatings).map(function(key, index) {
      return (
        <div key={'div' + index}>
          <span className="tsSideBarSubtitle" key={'span1' + index}>{key}</span>
          <Rating name={key} value={props.categoryRatings[key].Overall} readOnly={true} precision={0.2} size="small" key={key}/>
          <span>{(props.categoryRatings[key].Overall).toFixed(1)}</span>
        </div>
      )
    });
  }


  // const mappedCategories = props.categoryRatings.map((category) => {
  //   <div>
  //     <Rating name={category.name}></Rating>
  //   </div>
  // })




  // <Rating name="sidebarStars" value={totalRating} readOnly={true} precision={0.1} size="medium" />
  return (
    <div>
      <h3>By Feature</h3>
      {mappedCategories}
      <div className="tsSeperator"></div>
    </div>
  )
}


export default ByFeature;