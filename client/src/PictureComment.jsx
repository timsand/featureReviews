import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';



const PictureComment = (props) => {

  const useStyles = makeStyles(theme => ({
    tsPictureModal: {
      position: 'absolute',
      width: 501,
      height: 500,
      bottom: '20%',
      right: '35%',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      borderTop: '1px solid #808080',
      padding: theme.spacing(2, 4, 3),
    }
  }))

  const classes = useStyles();

  let options = { month: 'long', day: 'numeric', year: 'numeric' };
  let date = new Intl.DateTimeFormat('en-US', options).format(props.date);
  let userImages = props.comment.pictureArray.map((picture, i) => {
    return <img onClick={(e) => {props.changeSubImage(e)}} className="tsPictureModalCommentSmallImage" src={picture.url} id={picture.id} data-pictureid={picture.pictureId} key={"smallImage" + i}></img>
  })


  return (
    <div>
      <div className="tsTopBar">
        <h4 onClick={props.handleClose} className="tsCloseButton">X</h4>
      </div>
      <div className={classes.tsPictureModal}>
        <div className="tsPictureModalGalleryBar">
          <img onClick={props.clearComment} src="https://gammazon-users.s3.us-east-2.amazonaws.com/gallery.png"></img>
          <span onClick={props.clearComment}>View Image Gallery</span>
        </div>
        <div className="tsModalCommentContainer">

          <div className="tsModalPictureCommentBackdrop">
            <img className="tsModalPictureComment" src={props.currentPicture.url}></img>
          </div>

          <div>
            <h3 className="tsPictureModalCommentTitle">{props.title}</h3>
            <div className="tsReviewTitleContainer">
              <div>
                <Rating name="tsPicRating" value={props.comment.rating} readOnly={true} size="small" />
                <span className="tsReviewTitleModal">{props.comment.title}</span>
              </div>
            </div>
            <div className="tsPictureModalCommentAuthor">
              <span>By {props.comment.person[0]} on {date}</span>
            </div>
            <div className="tsPictureModalCommentBody">
              <span>{props.comment.body}</span>
            </div>
            <div className="tsPictureModalCommentBottom">
              <span>Images in this review</span>
              <div>
                {userImages}
              </div>
            </div>


          </div>

        </div>



      </div>
    </div>
  )
}


export default PictureComment;