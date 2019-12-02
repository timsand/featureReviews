import React from 'react';


const BottomButtons = (props) => {
  if (props.buttonClicked) {
    return (
      <div>
        Thank you for your feedback.
        <button>COMMENT</button>
        <button>REPORT ABUSE</button>
      </div>
    )
  } else {
    return (
      <div>
        <button onClick={(e)=>{props.helpfulClicked(e)}} id={props.id}>Helpful</button>
        <button>COMMENT</button>
        <button>REPORT ABUSE</button>
      </div>
    )
  }

}

export default BottomButtons;