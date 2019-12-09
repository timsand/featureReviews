import React from 'react';
import Modal from '@material-ui/core/Modal';
import PictureHome from './PictureHome.jsx';
import PictureComment from './PictureComment.jsx';


class PictureModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      currentComment: undefined,
      currentPicture: undefined,
      comments: this.props.comments,
      title: this.props.title
    }

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.changePicture = this.changePicture.bind(this);
    this.clearComment = this.clearComment.bind(this);
    this.changeSubImage = this.changeSubImage.bind(this);
    this.launchSpecificPicture = this.launchSpecificPicture.bind(this);
  }

  handleOpen() {
    this.setState({ open: true })
  }

  handleClose() {
    this.setState({ open: false, currentComment: undefined })
  }

  clearComment() {
    this.setState({currentComment: undefined, currentPicture: undefined})
  }

  changePicture(event) {
    //need to write a check that checks to see if comment has multiple pictures
    let pictureId = event.target.dataset.pictureid;
    let currentPicture;
    let currentComment;
    const id = event.target.id;
    const comments = this.state.comments;
    comments.forEach((comment) => {
      if(comment.id == id) {
        currentComment = comment;
        comment.pictureArray.forEach((picture) => {
          if(picture.pictureId == pictureId) {
            currentPicture = picture;
          }
        })
      }
    })
    this.setState({ currentComment: currentComment, currentPicture: currentPicture })
  }

  launchSpecificPicture(event) {
    this.handleOpen();
    this.changePicture(event);
  }

  changeSubImage(event) {
    let pictureId = event.target.dataset.pictureid;
    let currentComment = this.state.currentComment;
    let currentPicture = this.state.currentPicture;
    currentComment.pictureArray.forEach((picture) => {
      if(picture.pictureId == pictureId) {
        currentPicture = picture;
      }
    })
    this.setState({currentPicture: currentPicture})
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
    let imageEmbedded = this.props.totalPictures.map((picture, idx) => {
      if (idx <= 3) {
        return <img onClick={(e)=>{this.launchSpecificPicture(e)}} src={picture.url} id={picture.id} data-pictureid={picture.pictureId} key={"embeddedImg"+ idx}></img>
      }
    })

    if (this.state.currentComment && this.state.currentPicture) {
      return (
        <div id="tsPictureModalTopContainer">
          <h4>Customer images</h4>
          <div className="tsPictureModalImageEmbedded">
            {imageEmbedded}
          </div>
          <a id="tsPictureModalAnchor" onClick={this.handleOpen}>See all customer images</a>
          <Modal open={this.state.open} onClose={this.handleClose}>
            <div>
              <PictureComment changeSubImage={this.changeSubImage} title={this.props.title} currentPicture={this.state.currentPicture} comment={this.state.currentComment} totalPictures={this.props.totalPictures} clearComment={this.clearComment}/>
            </div>
          </Modal>
        </div>
      )
    } else {
      return (
        <div id="tsPictureModalTopContainer">
          <h4>Customer images</h4>
          <div className="tsPictureModalImageEmbedded">
            {imageEmbedded}
          </div>
          <a id="tsPictureModalAnchor" onClick={this.handleOpen}>See all customer images</a>
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