import React, {Component, createRef} from 'react';
import ReactDOM from 'react-dom';
import Xbutton from './Images/Xbutton.png';
import ExpandedIcon from './ExpandedIcon.jsx';
import leftArrow from './Images/leftArrow.png';
import rightArrow from './Images/rightArrow.png';
import upArrow from './Images/upArrow.png';
import downArrow from './Images/downArrow.png';
import noImage from './Images/noImage.png';

class ExpandedGallery extends React.Component {
  constructor(props){
    super(props);
    this.state={
      zoomed: false,
      x: null,
      y: null,
    }
    this.imageRef = createRef();
    this.handleMousePan = this.handleMousePan.bind(this);
    this.handleExpandedClick = this.handleExpandedClick.bind(this);
  }

  handleExpandedClick() {
    this.setState({zoomed: !this.state.zoomed})
  }

  handleMousePan(event) {
    const {
      left: offsetLeft,
      top: offsetTop
    } = this.imageRef?.current?.getBoundingClientRect() || {left: 0, top: 0}
    // console.log(this.imageRef.current.getBoundingClientRect())
    let x = ((event?.pageX - offsetLeft))/2.3;
    let y = ((event?.pageY - offsetTop))/2.3;
    this.setState({x: x, y: y})
  }

  render() {
    if (!this.props.open) {
      return null;
    }
    if (this.state.zoomed) {

      return (
        <div className='modal'>
          <div className='modalContent'>
            {/* main center image */}
            <div className='modalImageContainer'>
              <img src={this.props.photos[this.props.photoIndex]?.url || noImage}
              onClick={this.handleExpandedClick}
              onMouseMove={this.handleMousePan}
              ref={this.imageRef}
              className='modalImage zoomedImage'
              style={{transformOrigin: `${this.state.x}px ${this.state.y}px`,}}/>
            </div>
          </div>
        </div>
      )
    }
    return (
      // background fade out
    <div className='modal'>
      <div className='modalContent'>
        {/* main center image */}
        <div className='modalImageContainer'>
        <img src={this.props.photos[this.props.photoIndex]?.url}
          onClick={this.handleExpandedClick}
          className='modalImage'/>
        </div>

        <div className='modalHeader'>
          {/* close button */}
        <img
        src={Xbutton}
        onClick={(e) => this.props.xClick && this.props.xClick(e)}
        className='XButton'/>
          {/* up arrow */}
          {this.props.photos.length > 7 && this.props.offset > 0 &&
            <img src={upArrow}
              className='vertArrow expandedUp'
              onClick={this.props.handleUp}
            />
            }
          {/* icons to swap */}
          <div className='iconContainer'>
            {this.props.thumbnails.map((photo, index) => {
              if (index + this.props.offset === this.props.photoIndex) {
                //return a highlighted component if it is the current photo
                return(
                <ExpandedIcon
                  click={this.props.handleThumb}
                  photo={photo}
                  index={index + this.props.offset}
                  key={index}
                  selected={1}
                  />)
              }
              return(
                <ExpandedIcon
                  click={this.props.handleThumb}
                  photo={photo}
                  index={index}
                  key={index}/>
              )
            })}
          </div>

            {/* down arrow */}
            {this.props.photos?.length > 7 && this.props.offset + 7 < this.props.photos?.length &&
              <img src={downArrow}
              onClick={this.props.handleDown}
              className='vertArrow expandedDown'
            />}
            {/* left arrow */}
            { this.props.photoIndex !== 0 &&
            <div className='leftArrowContainer'
            onClick={this.props.handleLeft}
          ><img src={leftArrow}
              className='horzArrow'
          /></div>}
          {/* right arrow */}
          { this.props.photoIndex !== this.props.photos.length - 1 &&
            <div className='rightArrowContainer'
            onClick={this.props.handleRight}
          ><img src={rightArrow}
          className='horzArrow'
          /></div>}
        </div>
        <div className='modal-body'>


        </div>

      </div>
    </div>
    )
  }
}


export default ExpandedGallery;