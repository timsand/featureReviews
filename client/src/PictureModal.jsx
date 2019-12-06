import React from 'react';
import Modal from '@material-ui/core/Modal';
import PictureHome from './PictureHome.jsx';


class PictureModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      currentComment: undefined,
      comments: this.props.comments
    }

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.changePicture = this.changePicture.bind(this);
  }

  handleOpen() {
    this.setState({ open: true })
  }

  handleClose() {
    this.setState({ open: false })
  }

  changePicture(event) {
    let currentComment;
    const id = event.target.id;
    const comments = this.state.comments;
    comments.forEach((comment) => {
      if(comment.id == id) {
        currentComment = comment;
      }
    })
    this.setState({ currentComment: currentComment })
  }

  static getDerivedStateFromProps(props, state) {
    if(props.comments.length !== state.comments.length) {
      return {
        comments: props.comments
      }
    }
    return null;
  }

  render() {

    if (this.state.currentComment) {
      return (
        <div>
          <button onClick={this.handleOpen}>Set open</button>
          <Modal open={this.state.open} onClose={this.handleClose}>
            <div>
              <PictureHome totalPictures={this.props.totalPictures} changePicture={this.changePicture} />
            </div>
          </Modal>
        </div>
      )
    } else {
      return (
        <div>
          <button onClick={this.handleOpen}>Set open</button>
          <Modal open={this.state.open} onClose={this.handleClose}>
            <div>
              <PictureHome totalPictures={this.props.totalPictures} changePicture={this.changePicture} />
            </div>
          </Modal>
        </div>
      )
    }

  }

}


export default PictureModal;