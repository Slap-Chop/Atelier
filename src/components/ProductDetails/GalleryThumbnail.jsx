import React from 'react';

const GalleryThumbnail = (props) => {
  console.log('render a gallery thumbnail')
  return (
    <div
    onClick={() => {
      props.click(props.index)
    }}
    style={{fontWeight: props.weight || 100,
      width: '100px',
      height: '100px',
      display: 'flex',
      textAlign: 'center',
      textAlignVertical: 'center',
      padding: '5px'
      }}
      >
      <img
      style={{float: 'right',
      transformOrigin: '50% 50%',
      borderRadius: '10%',
      height: '60%',
      width: '60%',
      }}
      src={`${props.photo.thumbnail_url}`}/>

    </div>
  )
}

export default GalleryThumbnail;