import React from 'react';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      photos: [],
      photoIndex: 0
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

  render() {
    // console.log('style in image', this.props.style.photos)


    if (this.state.photos && this.state.photos[this.state.photoIndex]) {
      // console.log('photo url', this.state.photos[this.state.photoIndex])
      return(
        <div
        style={{
          backgroundImage:`url(${this.state.photos[this.state.photoIndex].url})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '100%',
          width: '100%',
          backgroundSize: 'contain'
        }}
        >

          {/* {console.log('style in image', this.props.style)} */}
      </div>
      )
    }

  }


}

export default ImageGallery;