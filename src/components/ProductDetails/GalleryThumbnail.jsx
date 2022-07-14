import React from 'react';

const GalleryThumbnail = (props) => {
  return (
    <div
    style={{fontWeight: props.weight || 100,
      width: '100px',
      height: '100px',
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
          borderRadius: '10%',
          height: '60px',
          width: '60px',
          objectFit: 'cover',
          opacity: props.selected || .5
        }}
      src={`${props.photo.thumbnail_url}`}/>

    </div>
  )
}

export default GalleryThumbnail;