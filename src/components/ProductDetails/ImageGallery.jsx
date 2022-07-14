import React from 'react';
import GalleryThumbnail from './GalleryThumbnail.jsx';

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

      </div>
      )
    }

  }


}

export default ImageGallery;