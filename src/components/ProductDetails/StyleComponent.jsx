import React from 'react';
import checkmark from './Images/checkmark.png';

const StyleComponent = (props) => {
  return(
    <div
    style={{fontWeight: props.weight || 100,
    width: '100px',
    height: '100px',
    borderRadius: '100%',
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
    height: props.current || '50px',
    width: props.current || '50px',
    objectFit: 'cover'
    }}
    src={`${props.style.photos[0].thumbnail_url}`}
    alt='Image N/A'/>

    {/* {console.log(props.style)} */}
    {props.current ? <img
      src={checkmark}
      style={{
        width: '15px',
        height: '15px',
        backgroundColor:'white',
        borderRadius: '50%',
        objectFit: 'cover'
      }}/>: null

    }
  </div>
  )
}

export default StyleComponent;