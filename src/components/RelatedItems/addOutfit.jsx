import React from 'react';

const addOutfit = (props) => {




  return (
    <>

    <div  onClick={props.onAdd} className="card" style={
      {display: 'inline-block',
      border: '1px solid blue',
      margin: '2%',
      marginLeft: '10px',
      marginRight: '10px',
      minWidth: '160px',
      height: '195px',
      justifyContent: 'center'
    }
    }>


      <div  style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
      <i className="fa-9x fa-plus" aria-hidden="true"></i>

      </div>

      <div className="container" style={{
        textAlign: 'center'
      }}>
      <div className="addText">Add to Outfit</div>

      </div>
    </div>

    </>

  )
}

export default addOutfit;