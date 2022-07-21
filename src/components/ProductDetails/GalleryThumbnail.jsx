import React from 'react';
import noImage from './Images/noImage.png';

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
      src={`${props.photo.thumbnail_url}` || noImage}
      alt='Image N/A'/>

    </div>
  )
}

export default GalleryThumbnail;