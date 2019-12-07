import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';



const PictureComment = (props) => {

  const useStyles = makeStyles(theme => ({
    tsPictureModal: {
      width: 500,
      height: 500,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    }
  }))

  const classes = useStyles();

  let options = {month: 'long', day: 'numeric', year: 'numeric'};
  let date = new Intl.DateTimeFormat('en-US', options).format(props.date);
  let userImages = props.comment.pictureArray.map((picture, i) => {
    return <img className="tsPictureModalCommentSmallImage" src={picture.url} id={picture.id} key={"smallImage" + i}></img>
  })


  return (
    <div className={classes.tsPictureModal}>
      <div>
        Image Gallery banner
      </div>
      <div className="tsModalCommentContainer">

        <div className="tsModalPictureCommentBackdrop">
          <img className="tsModalPictureComment" src={props.comment.pictureArray[0].url}></img>
        </div>

        <div>
          <h3>{props.title}</h3>
          <div className="tsReviewTitleContainer">
            <Rating name="tsPicRating" value={props.comment.rating} readOnly={true} size="small" />
            <span className="tsReviewTitle">{props.comment.title}</span>
          </div>
          <div className="tsPictureModalCommentAuthor">
            <span>By {props.comment.person} on {date}</span>
          </div>
          <div>
            <span>{props.comment.body}</span>
          </div>
          <div>
            Images in this review
          </div>
          <div>
            {userImages}
          </div>
        

        </div>

      </div>



    </div>
  )
}


export default PictureComment;