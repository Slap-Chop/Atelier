import React from 'react';

const StyleComponent = (props) => {
  return(
    <div onClick={() => {props.click(props.style)}}
    style={{fontWeight: props.weight || 100,
    border: '1px solid grey',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    display: 'flex',
    textAlign: 'center',
    textAlignVertical: 'center'
    }}>
    {props.style.name}
    {/* {console.log(props.style)} */}
  </div>
  )

}

export default StyleComponent;