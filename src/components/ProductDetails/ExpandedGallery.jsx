import React from "react";
import ReactDOM from 'react-dom';
import Xbutton from './Images/Xbutton.png';

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
        backgroundImage:`url(${this.props.photos[this.props.photoIndex]?.url})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
      }}>
        <div className='modal-header'>
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
          }}/></div>
        <div className='modal-body'></div>

      </div>
    </div>
    )
  }
}


export default ExpandedGallery;