import React from 'react';
import GalleryThumbnail from './GalleryThumbnail.jsx';
// import leftArrow from './Images/leftArrow.png';
// import rightArrow from './Images/rightArrow.png';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      photos: [],
      photoIndex: 0,
    }
  }

  componentDidMount() {
    this.setState({
      photos: this.props.style.photos})
  }

  componentDidUpdate() {
    if (this.state.photos !== this.props.style.photos && this.props.style.photos) {
      this.setState({photos:this.props.style.photos})
    }
    // if (this.state.photos[this.state.photoIndex] === undefined) {
    //   this.setState({photoIndex: 0})
    // }
  }

  handleThumbnailClick(index) {
    this.setState({photoIndex: index})
  }

  render() {
    // make sure props have been passed before trying to render
    if (this.state.photos && this.state.photos[this.state.photoIndex]) {
      return(
        <div
        style={{
          position: 'relative',
          display: 'table',
          backgroundImage:`url(${this.props.style.photos[this.state.photoIndex].url})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '100%',
          width: '100%',
          backgroundSize: 'contain'
        }}
        >
          <div>
            {this.state.photos.map((photo, index) => {
              if (index === this.state.photoIndex) {
                //return a highlighted component if it is the current photo
                return(
                <GalleryThumbnail
                  click={this.handleThumbnailClick.bind(this)}
                  photo={photo}
                  index={index}
                  key={index}
                  selected={1}
                  />)
              }
              return(
                <GalleryThumbnail
                  click={this.handleThumbnailClick.bind(this)}
                  photo={photo}
                  index={index}
                  key={index}/>
              )
            })}
          </div>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '10%'
          }}>left Arrow</div>
          <div style={{
            position: 'absolute',
            top: '50%',
            right: '0%'
          }}>right arrow</div>

      </div>
      )
    }

  }


}

export default ImageGallery;