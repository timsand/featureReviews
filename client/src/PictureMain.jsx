import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



const PictureMain = (props) => {





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

  const pictureMain = [];
  if (props.totalPictures.length) {
    props.totalPictures.forEach((picture, i) => {
      pictureMain.push(
        <div className="tsPictureMainModal" key={`modalDiv${picture.id}i${i}`}>
          <img className="tsPictureMainModalPicture" src={picture.url} commentid={picture.id} key={`modalPic${picture.id}i${i}`}></img>
        </div>
      )
    })
  }


  return (
    <div className={classes.tsPictureModal}>
      <div className="tsPictureModalContainer">
        {pictureMain}
      </div>
    </div>
  )
}



export default PictureMain;