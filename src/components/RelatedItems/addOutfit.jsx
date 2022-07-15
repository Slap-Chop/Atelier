import React from 'react';

const addOutfit = (props) => {

  var cardOver = () => {
    document.getElementById(`O${props.currentProduct.name}`).style.boxShadow = '0 8px 16px 0 rgba(0,0,0,0.4)'
  }

  var cardOut = () => {
    document.getElementById(`O${props.currentProduct.name}`).style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)'
  }


  return (
    <>

    <div  onClick={props.onAdd} id={`O${props.currentProduct.name}`} className="card" onMouseOver={cardOver} onMouseOut= {cardOut}style={
      {display: 'inline-block',
      margin: '2%',
      marginLeft: '10px',
      marginRight: '10px',
      minWidth: '160px',
      height: '195px',
      justifyContent: 'center',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      tansition: '0.5s',
      borderRadius: '5%'
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