import React from 'react';
import GalleryThumbnail from './GalleryThumbnail.jsx';
import leftArrow from './Images/leftArrow.png';
import rightArrow from './Images/rightArrow.png';
import upArrow from './Images/upArrow.png';
import downArrow from './Images/downArrow.png';
import ExpandedGallery from './ExpandedGallery.jsx';
import noImage from './Images/noImage.png';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      photos: [],
      photoIndex: 0,
      thumbnails: [],
      offset: 0,
      LRClick: false,
      expanded: false
    }
  }

  componentDidMount() {
    this.setState({
      photos: this.props.style.photos})
    if (this.props.style.photos?.length > 7) {
      let array = this.props.style.photos?.slice(0 + this.state.offset, 7 + this.state.offset);
      this.setState({thumbnails: array})
    } else {
      this.setState({thumbnails: this.props.style.photos})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(this.state.photos, this.state.thumbnails)
    //make sure photo list updates accordingly to props
    if (this.state.photos !== this.props.style.photos && this.props.style.photos) {
      this.setState({photos:this.props.style.photos})
      // cut the 7 thumbnail images out
      if (this.props.style.photos.length > 7) {
        let thumbArray = this.props.style.photos.slice(0 + this.state.offset, 7 + this.state.offset);
        this.setState({thumbnails: thumbArray})
      } else {
        this.setState({thumbnails: this.props.style.photos})
      }
    }
    //reset photoindex if product changes to not index into undefined
    if (this.props.id !== prevProps.id) {
      this.setState({photoIndex: 0})
    }
    // update thumbnail list if the offset changes
    if (this.state.offset !== prevState.offset) {
      let thumbArray = this.props.style.photos.slice(0 + this.state.offset, 7 + this.state.offset);
      this.setState({thumbnails: thumbArray})
    }
    //snap the offset(thumbnail list) to the current picture if the left right arrow goes to something out of range
    if (this.state.photoIndex > this.state.offset + 6 && this.state.LRClick) {
      this.setState({offset: this.state.photoIndex - 6, LRClick: false})
    }
    if (this.state.photoIndex < this.state.offset && this.state.LRClick) {
      this.setState({offset: this.state.photoIndex, LRClick: false})
    }
    //if going to index out of bounds, reset
    if (prevState.photoIndex > this.state.photos?.length) {
      this.setState({photoIndex:0, offset: 0})
    }
  }

  toggleExpanded() {
    if (this.state.expanded === false) {
      this.setState({expanded: true})
    }
  }

  closeExpanded() {
    this.setState({expanded: false})
  }

  handleThumbnailClick(index) {
    this.setState({photoIndex: index + this.state.offset})
  }

  handleRightClick() {
    let index = this.state.photoIndex;
    if (index < this.state.photos.length - 1) {
      index++;
      this.setState({photoIndex: index, LRClick: true})
    }
  }

  handleLeftClick() {
    let index = this.state.photoIndex;
    if (index > 0) {
      index--;
      this.setState({photoIndex: index, LRClick: true})
    }
  }

  handleDownClick() {
    let offset = this.state.offset;
    if (offset + 7 < this.state.photos.length) {
      // console.log('clickdown', this.state.offset)
      offset++;
      this.setState({offset: offset})
    }
  }

  handleUpClick() {
    let offset = this.state.offset;
    if (offset > 0) {
      // console.log('clickup', this.state.offset)
      offset--;
      this.setState({offset: offset})
    }
  }

  render() {
    // make sure props have been passed before trying to render
    if (this.state.photos && this.state.photos[this.state.photoIndex]) {
      return(
        <div className='imageGalleryContainer'>
          <div className='imageContainer'>
          {/* main image */}
          <img onClick={this.toggleExpanded.bind(this)}
          src={this.props.style.photos[this.state.photoIndex]?.url || noImage}
          className='mainImage'/>

        </div>

          <div>
            {/* up arrow, hide if expanded */}
            {!this.state.expanded && this.state.photos.length > 7 && this.state.offset > 0 &&
            <img src={upArrow}
              onClick={this.handleUpClick.bind(this)}
              className='vertArrow'/>
            }
            {!this.state.expanded && this.state.thumbnails.map((photo, index) => {
              if (index + this.state.offset === this.state.photoIndex) {
                //return a highlighted component if it is the current photo
                return(
                <GalleryThumbnail
                  click={this.handleThumbnailClick.bind(this)}
                  photo={photo}
                  index={index + this.state.offset}
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
            {/* down arrow, hide on expand */}
            {!this.state.expanded && this.state.photos?.length > 7 && this.state.offset + 7 < this.state.photos?.length &&
              <img src={downArrow}
              onClick={this.handleDownClick.bind(this)}
              className='vertArrow'
            />}
          </div>
          {/* left arrow, hide arrow if on first image, hide on expand */}
          { this.state.photoIndex !== 0 && !this.state.expanded &&
            <div
              className='leftArrowContainer'
            onClick={this.handleLeftClick.bind(this)}
          ><img src={leftArrow}
              className='horzArrow'
          /></div>}
          {/* hide right arrow if on last image, hide on expand */}
          { this.state.photoIndex !== this.state.photos.length - 1 && !this.state.expanded &&
            <div className='rightArrowContainer'
            onClick={this.handleRightClick.bind(this)}
          ><img src={rightArrow}
              className='horzArrow'
          /></div>}
        <ExpandedGallery
          open={this.state.expanded}
          xClick={this.closeExpanded.bind(this)}
          photos={this.state.photos}
          photoIndex={this.state.photoIndex}
          thumbnails={this.state.thumbnails}
          offset={this.state.offset}
          LRClick={this.state.LRClick}
          handleLeft={this.handleLeftClick.bind(this)}
          handleRight={this.handleRightClick.bind(this)}
          handleUp={this.handleUpClick.bind(this)}
          handleDown={this.handleDownClick.bind(this)}
          handleThumb={this.handleThumbnailClick.bind(this)}

          />
      </div>
      )
    }

  }


}

export default ImageGallery;