import React from 'react';

const addOutfit = (props) => {

  var cardOver = () => {
    document.getElementById(`O${props.currentProduct.name}`).style.boxShadow = '0 2px 4px 0 rgba(0,0,0,0.4)';
    document.getElementById(`O${props.currentProduct.name}`).style.opacity = '100%'
  }

  var cardOut = () => {
    document.getElementById(`O${props.currentProduct.name}`).style.boxShadow = '0 1px 3px 0 rgba(0,0,0,0.2)';
    document.getElementById(`O${props.currentProduct.name}`).style.opacity = '90%'
  }


  return (
    <>

    <div  onClick={props.onAdd} id={`O${props.currentProduct.name}`} className="card" onMouseOver={cardOver} onMouseOut= {cardOut}style={
      {display: 'inline-block',
      margin: '3px',
      marginLeft: '5px',
      marginRight: '2px',
      minWidth: '160px',
      minHeight: '260px',
      justifyContent: 'center',
      boxShadow: '0 1px 3px 0 rgba(0,0,0,0.2)',
      transition: 'all 0.1s linear',
      borderRadius: '2%',
      backgroundColor: 'lightgrey',
      opacity: '90%'
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