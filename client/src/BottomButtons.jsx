import React from 'react';
import Button from '@material-ui/core/Button';


const BottomButtons = (props) => {
  if (props.buttonClicked) {
    return (
      <div className="tsBottomButtons">
        Thank you for your feedback.
        <a className="tsButtonSeperator"></a>
        <button className="tsCommentButton">COMMENT</button>
        <a className="tsButtonSeperator"></a>
        <button className="tsReportAbuseButton">REPORT ABUSE</button>
      </div>
    )
  } else {
    return (
      <div className="tsBottomButtons">
        <button className="tsHelpfulBottomButton" onClick={(e)=>{props.helpfulClicked(e)}} id={props.id}>Helpful</button>
        <a className="tsButtonSeperator"></a>
        <button className="tsCommentButton">Comment</button>
        <a className="tsButtonSeperator"></a>
        <button className="tsReportAbuseButton">Report Abuse</button>
      </div>
    )
  }

}

export default BottomButtons;