import React from 'react';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';


const BottomButtons = (props) => {
  if (props.buttonClicked) {
    return (
      <div className="tsBottomButtons">
        <span className="tsHelpfulSubmitted">√</span>
        <span className="tsHelpfulSubmitted">Thank you for your feedback.</span>
        <a className="tsButtonSeperator"></a>
        <button className="tsCommentButton">Comment</button>
        <a className="tsButtonSeperator"></a>
        <button className="tsReportAbuseButton">Report abuse</button>
      </div>
    )
  } else {
    return (
      <div className="tsBottomButtons">
        <button className="tsHelpfulBottomButton" onClick={(e)=>{props.helpfulClicked(e)}} id={props.id}>Helpful</button>
        {/* <Modal open={true}>
          <div>
            <h2>This is a modal</h2>
            <p>This is the modal text paragraph</p>
          </div>
        </Modal> */}
        <a className="tsButtonSeperator"></a>
        <button className="tsCommentButton">Comment</button>
        <a className="tsButtonSeperator"></a>
        <button className="tsReportAbuseButton">Report abuse</button>
      </div>
    )
  }

}

export default BottomButtons;