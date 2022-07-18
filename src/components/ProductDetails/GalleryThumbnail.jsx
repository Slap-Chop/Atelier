import React from 'react';

const GalleryThumbnail = (props) => {
  return (
    <div
    className='galleryThumbnailContainer'
      >
      <img
        className='galleryThumbnail'
        onClick={() => {
          props.click(props.index)
        }}
        style={{opacity: props.selected}}
      src={`${props.photo.thumbnail_url}`}/>

    </div>
  )
}

export default GalleryThumbnail;