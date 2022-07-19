import React from 'react';

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
      src={`${props.photo.thumbnail_url}`}/>

    </div>
  )
}

export default ExpandedIcon;