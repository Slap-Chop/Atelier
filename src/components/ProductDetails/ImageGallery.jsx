import React from 'react';
import GalleryThumbnail from './GalleryThumbnail.jsx';
import leftArrow from './Images/leftArrow.png';
import rightArrow from './Images/rightArrow.png';

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

  componentDidUpdate(prevProps) {
    if (this.state.photos !== this.props.style.photos && this.props.style.photos) {
      this.setState({photos:this.props.style.photos})
    }
    if (this.props.id !== prevProps.id) {
      this.setState({photoIndex: 0})
    }

    return true;
  }

  handleThumbnailClick(index) {
    this.setState({photoIndex: index})
  }

  handleRightClick() {
    let index = this.state.photoIndex;
    if (index < this.state.photos.length - 1) {
      index++;
      this.setState({photoIndex: index})
    }
  }

  handleLeftClick() {
    let index = this.state.photoIndex;
    if (index > 0) {
      index--;
      this.setState({photoIndex: index})
    }
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
          {/* hide arrow if on first image */}
          { this.state.photoIndex !== 0 &&
            <div style={{
            position: 'absolute',
            top: '50%',
            left: '10%'
            }}
            onClick={this.handleLeftClick.bind(this)}
          ><img src={leftArrow}
              style={{
                width: '20px',
                height: '20px',
                objectFit: 'cover'
          }}
          /></div>}
          {/* hide right arrow if on last image */}
          { this.state.photoIndex !== this.state.photos.length - 1 &&
            <div style={{
              position: 'absolute',
              top: '50%',
              right: '0%'
              }}
            onClick={this.handleRightClick.bind(this)}
          ><img src={rightArrow}
          style={{
            width: '20px',
            height: '20px',
            objectFit: 'cover'
          }}
          /></div>}

      </div>
      )
    }

  }


}

export default ImageGallery;