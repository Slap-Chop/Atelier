import React from 'react';
import noImage from './Images/noImage.png';

const ExpandedIcon = (props) => {
  return (
    <div
    className='expandedIconContainer'
      >
      <img
        onClick={() => {
          props.click(props.index)
        }}
        className='expandedIcon'
        style={{opacity: props.selected}}
      src={`${props.photo.thumbnail_url}` || noImage}/>

    </div>
  )
}

export default ExpandedIcon;