import React from 'react';

const StyleComponent = (props) => {
  return(
    <div onClick={() => {props.click(props.style)}}
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
    <img className='thumbnail' style={{float: 'right',
    transformOrigin: '50% 50%',
    borderRadius: '50%',
    height: '80%',
    width: '80%',
    }}
    src={`${props.style.photos[0].thumbnail_url}`}
    alt='Image N/A'/>
    {/* {console.log(props.style)} */}
  </div>
  )

}

export default StyleComponent;