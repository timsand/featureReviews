import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


const PictureModal = (props) => {
  //styles
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

  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div>
      <button onClick={handleOpen}>Set open</button>
      <Modal open={open} onClose={handleClose}>
        <div className={classes.tsPictureModal}>
          <p>
            Hello there... GENERAL KENOBI!!!!
          </p>
        </div>
      </Modal>
    </div>
  )
}

export default PictureModal;