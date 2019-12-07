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
          <h3>Title</h3>
          <div className="tsReviewTitleContainer">
            <Rating name="tsPicRating" value={props.comment.rating} readOnly={true} size="small" />
            <span className="tsReviewTitle">{props.comment.title}</span>
          </div>
          <div>
            By author at date
          </div>
          <div>
            <span>{props.comment.body}</span>
          </div>
          <div>
            Images in this review
          </div>
          <div>
            List of images
          </div>
        

        </div>

      </div>



    </div>
  )
}


export default PictureComment;