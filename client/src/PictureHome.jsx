import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



const PictureHome = (props) => {





  const useStyles = makeStyles(theme => ({
    tsPictureModal: {
      position: 'absolute',
      width: 501,
      height: 500,
      bottom: '20%',
      right: '35%',
      backgroundColor: theme.palette.background.paper,
      borderTop: '1px solid #808080',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    }
  }))

  const classes = useStyles();

  const pictureMain = [];
  if (props.totalPictures.length) {
    props.totalPictures.forEach((picture, i) => {
      pictureMain.push(
        <div className="tsPictureMainModal" key={`modalDiv${picture.id}i${i}`}>
          <img className="tsPictureMainModalPicture" src={picture.url} id={picture.id} data-pictureid={picture.pictureId} key={`modalPic${picture.id}i${i}`} onClick={(e) => {props.changePicture(e)}}>
          </img>
        </div>
      )
    })
  }


  return (
    <div>
      {/* <div className="tsTopBar">
        <h4 onClick={props.handleClose} className="tsCloseButton">X</h4>
      </div> */}
      <div className={classes.tsPictureModal}>
      <div className="tsTopBar">
        <h4 onClick={props.handleClose} className="tsCloseButton">X</h4>
      </div>
        <div className="tsPictureModalContainer">
          {pictureMain}
        </div>
      </div>
    </div>
  )
}



export default PictureHome;