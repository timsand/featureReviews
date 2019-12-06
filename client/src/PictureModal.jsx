import React from 'react';
import Modal from '@material-ui/core/Modal';
import PictureMain from './PictureMain.jsx';


class PictureModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ open: true })
  }

  handleClose() {
    this.setState({ open: false })
  }

  render() {

    return (
      <div>
        <button onClick={this.handleOpen}>Set open</button>
        <Modal open={this.state.open} onClose={this.handleClose}>
          <div>
            <PictureMain totalPictures={this.props.totalPictures}/>
          </div>
        </Modal>
      </div>
    )
  }
}


export default PictureModal;