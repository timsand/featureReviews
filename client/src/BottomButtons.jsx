import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';



const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    padding: theme.spacing(2, 4, 3),
  },
}));


const BottomButtons = (props) => {

  const classes = useStyles();


  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const meanResponse = () => {
    alert('Gammazon cares little for your foolish complaints!')
  }


  if (props.buttonClicked) {
    return (
      <div className="tsBottomButtons">
        <span className="tsHelpfulSubmitted">√</span>
        <span className="tsHelpfulSubmitted">Thank you for your feedback.</span>
        <a className="tsButtonSeperator"></a>
        <button className="tsCommentButton" onClick={props.writeReview}>Comment</button>
        <a className="tsButtonSeperator"></a>
        <button className="tsReportAbuseButton" onClick={handleOpen}>Report abuse</button>
        <Modal open={open} onClose={handleClose}>
          <div className={classes.paper}>
            <h1>Report abuse</h1>
            <p>If you find this content inappropriate and think it should be removed from the Gammazon site, let us know by clicking the button below.</p>
            <button className="tsReportAbuseButtonInModal" onClick={meanResponse}>Report</button>
          </div>
        </Modal>
      </div>
    )
  } else {
    return (
      <div className="tsBottomButtons">
        <button className="tsHelpfulBottomButton" onClick={(e) => { props.helpfulClicked(e) }} id={props.id}>Helpful</button>
        <a className="tsButtonSeperator"></a>
        <button className="tsCommentButton" onClick={props.writeReview}>Comment</button>
        <a className="tsButtonSeperator"></a>
        <button className="tsReportAbuseButton" onClick={handleOpen}>Report abuse</button>
        <Modal open={open} onClose={handleClose}>
          <div className={classes.paper}>
            <h1>Report abuse</h1>
            <p>If you find this content inappropriate and think it should be removed from the Gammazon site, let us know by clicking the button below.</p>
            <button className="tsReportAbuseButtonInModal" onClick={meanResponse}>Report</button>
          </div>
        </Modal>
      </div>
    )
  }

}

export default BottomButtons;