import React from "react";
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
    const overlayStyle = {
      position: 'fixed', /* Stay in place */
      zIndex: 1, /* Sit on top */
      left: 0,
      top: 0,
      width: '100%', /* Full width */
      height: '100%', /* Full height */
      justifyContent: 'center',
      display: 'flex',
      backgroundColor: 'rgb(0,0,0)', /* Fallback color */
      backgroundColor: 'rgba(0,0,0,0.4)' /* Black w/ opacity */
    }
  }



  render() {
    if (!this.props.open) {
      return null;
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
          display: 'flex'
          }}>
        <img src={this.props.photos[this.props.photoIndex]?.url}
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
          width: '50px',
          height: '50px',
          display: 'flex',
          textAlign: 'center',
          textAlignVertical: 'center',
          paddingLeft: '5px',
          zIndex: 1
          }}/>
          {/* up arrow */}
          {this.props.photos.length > 7 && this.props.offset > 0 &&
            <img src={upArrow}
              onClick={this.props.handleUp}
              style={{
              width: '50px',
              height: '50px',
              display: 'flex',
              textAlign: 'center',
              textAlignVertical: 'center',
              paddingLeft: '5px'
              }}
            />
            }
          {/* icons to swap */}
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
            {/* down arrow */}
            {this.props.photos?.length > 7 && this.props.offset + 7 < this.props.photos?.length &&
              <img src={downArrow}
              onClick={this.props.handleDown}
              style={{
              width: '50px',
              height: '50px',
              display: 'flex',
              textAlign: 'center',
              textAlignVertical: 'center',
              paddingLeft: '5px',
              zIndex: 4,
              position: 'relative',
              objectFit: 'contain'
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