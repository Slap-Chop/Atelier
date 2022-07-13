import React from 'react';

const StyleComponent = (props) => {
  return(
    <div
    style={{fontWeight: props.weight || 100,
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    display: 'flex',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: '5px'
    }}>
    {/* {props.style.name} */}
    <img
    onClick={() => {props.click(props.style)}}
    className='thumbnail' style={{float: 'right',
    transformOrigin: '50% 50%',
    borderRadius: '50%',
    height: '50px',
    width: '50px',
    objectFit: 'cover'
    }}
    src={`${props.style.photos[0].thumbnail_url}`}
    alt='Image N/A'/>
    {/* {console.log(props.style)} */}
  </div>
  )

}

export default StyleComponent;