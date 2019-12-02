import React from 'react';


const HelpfulButton = (props) => {
  if (props.buttonClicked) {
    return (
      <div>
        Thank you for your feedback.
      </div>
    )
  } else {
    return (
      <div>
        <button>Helpful</button>
      </div>
    )
  }

}

export default HelpfulButton;