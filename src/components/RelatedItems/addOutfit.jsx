import React from 'react';
import plusButton2 from './images/plusButton2.png';
import noImage from '../ProductDetails/Images/noImage.png';

const addOutfit = (props) => {

  var cardOver = () => {
    // document.getElementById(`O${props.currentProduct.name}`).style.boxShadow = '0 2px 4px 0 rgba(0,0,0,0.4)';
    document.getElementById(`O${props.currentProduct.name}`).style.opacity = '100%'
  }

  var cardOut = () => {
    // document.getElementById(`O${props.currentProduct.name}`).style.boxShadow = '0 1px 3px 0 rgba(0,0,0,0.2)';
    document.getElementById(`O${props.currentProduct.name}`).style.opacity = '80%'
  }




  return (
    <>

    <div  onClick={props.onAdd} id={`O${props.currentProduct.name}`} className="card" onMouseOver={cardOver} onMouseOut= {cardOut}style={
      {display: 'inline-block',
      margin: '3px',
      minWidth: '160px',
      minHeight: '250px',
      justifyContent: 'center',
      boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2)',
      transition: 'all 0.1s linear',
      borderRadius: '2%',
      backgroundColor: 'lightgrey',
      opacity: '80%',
      marginBottom: '3px',
      backgroundImage: `url(${plusButton2})`,
      backgroundPosition: 'center',
      backgroundSize: '70%',
      backgroundRepeat: 'no-repeat'
    }
    }>



    </div>

    </>

  )
}

export default addOutfit;