import React from 'react';
import checkmark from './Images/checkmark.png';
import noImage from './Images/noImage.png';

const StyleComponent = (props) => {
  return(
    <div
    className='styleComponentContainer'>
    {/* {props.style.name} */}
    <img
    onClick={() => {props.click(props.style)}}
    className='styleThumbnail' style={{
    height: props.current,
    width: props.current,
    }}
    src={`${props.style.photos[0].thumbnail_url}` || noImage}
    alt='Image N/A'/>

    {/* {console.log(props.style)} */}
    {props.current ? <img
      src={checkmark}
      className='thumbnailCheck'/>: null

    }
  </div>
  )
}

export default StyleComponent;