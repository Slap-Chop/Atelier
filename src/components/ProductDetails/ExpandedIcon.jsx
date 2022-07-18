import React from 'react';

const ExpandedIcon = (props) => {
  return (
    <div
    style={{fontWeight: props.weight || 100,
      width: '50px',
      height: '50px',
      display: 'flex',
      textAlign: 'center',
      textAlignVertical: 'center',
      padding: '1px'
      }}
      >
      <img
        onClick={() => {
          props.click(props.index)
        }}
        style={{float: 'right',
          transformOrigin: '50% 50%',
          borderRadius: '50%',
          height: '40px',
          width: '40px',
          objectFit: 'cover',
          opacity: props.selected || .5,
          zIndex: 3
        }}
      src={`${props.photo.thumbnail_url}`}/>

    </div>
  )
}

export default ExpandedIcon;