import React, {Component, createRef} from 'react';
import ReactDOM from 'react-dom';
import Xbutton from './Images/Xbutton.png';
import ExpandedIcon from './ExpandedIcon.jsx';
import leftArrow from './Images/leftArrow.png';
import rightArrow from './Images/rightArrow.png';
import upArrow from './Images/upArrow.png';
import downArrow from './Images/downArrow.png';

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
    } = this.imageRef.current.getBoundingClientRect()



    let x = ((event.pageX - offsetLeft))/2.3;
    let y = ((event.pageY - offsetTop))/2.3;
    console.log('xy', x, y)
    this.setState({x: x, y: y})
  }

  render() {
    if (!this.props.open) {
      return null;
    }
    if (this.state.zoomed) {

      return (
        <div className='modal' style ={{
          position: 'fixed',
          zIndex: 1,
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          display: 'flex',
          backgroundColor: 'rgb(0,0,0)',
          backgroundColor: 'rgba(0,0,0,0.4)'
        }}>
          <div className='modal-content' style={{
          width: '90%',
          height: '90%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          }}>
            {/* main center image */}
            <div style={{

            allignItems: 'center',
            justifyContent: 'center',
            display: 'flex'
            }}>
              <img src={this.props.photos[this.props.photoIndex]?.url}
              onClick={this.handleExpandedClick}
              onMouseMove={this.handleMousePan}
              ref={this.imageRef}
              style={{
              transformOrigin: `${this.state.x}px ${this.state.y}px`,
              position: 'absolute',
              display: 'flex',
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              justifyContent: 'center',
              transform: 'scale(2.5)'
              }}/>
            </div>
          </div>
        </div>
      )
    }
    return (
      // background fade out
    <div className='modal' style ={{
      position: 'fixed',
      zIndex: 1,
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      display: 'flex',
      backgroundColor: 'rgb(0,0,0)',
      backgroundColor: 'rgba(0,0,0,0.4)'
    }}>
      <div className='modal-content' style={{
        width: '90%',
        height: '90%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
      }}>
        {/* main center image */}
        <div style={{
          allignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          overflow: 'hidden',
          }}>
        <img src={this.props.photos[this.props.photoIndex]?.url}
          onClick={this.handleExpandedClick}
          style={{
          position: 'absolute',
          display: 'flex',
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'contain',
          justifyContent: 'center',
        }}/>
        </div>

        <div className='modal-header'>
          {/* close button */}
        <img
        src={Xbutton}
        onClick={(e) => this.props.xClick && this.props.xClick(e)}
        style={{
          position: 'absolute',
          top: '3%',
          left: '5%',
          width: '50px',
          height: '50px',
          display: 'flex',
          paddingLeft: '5px',
          zIndex: 3,
          }}/>
          {/* up arrow */}
          {this.props.photos.length > 7 && this.props.offset > 0 &&
            <img src={upArrow}
              onClick={this.props.handleUp}
              style={{
              width: '50px',
              height: '50px',
              display: 'flex',
              position: 'absolute',
              top: '12%',
              left: '5%',
              paddingLeft: '5px'
              }}
            />
            }
          {/* icons to swap */}
          <div style ={{
            position: 'absolute',
            top: '18%',
            left: '5.5%'
          }}>
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
              style={{
              width: '50px',
              height: '50px',
              display: 'flex',
              paddingLeft: '5px',
              zIndex: 4,
              position: 'absolute',
              top:'60%',
              left: '5%',
              }}
            />}
            {/* left arrow */}
            { this.props.photoIndex !== 0 &&
            <div style={{
            position: 'absolute',
            top: '50%',
            left: '10%'
            }}
            onClick={this.props.handleLeft}
          ><img src={leftArrow}
              style={{
                background: 'rgba(105, 105, 105, .5)',
                width: '25px',
                height: '60px',
                objectFit: 'cover'
          }}
          /></div>}
          {/* right arrow */}
          { this.props.photoIndex !== this.props.photos.length - 1 &&
            <div style={{
              position: 'absolute',
              top: '50%',
              right: '0%'
              }}
            onClick={this.props.handleRight}
          ><img src={rightArrow}
          style={{
            background: 'rgba(105, 105, 105, .5)',
            width: '25px',
            height: '60px',
            objectFit: 'cover'
          }}
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