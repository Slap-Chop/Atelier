import React from 'react';
import StyleSelector from './StyleSelector.jsx';

const ProductInfo = (props) => {
  console.log('currentProduct:', props.currentProduct)
  return (
  <div style={{border: '1px solid blue'}}>
    <p>Review star component</p>
    {/* product name and category */}
    <div>{props.currentProduct.category}</div>
    <div style={{fontSize: 24,
      fontWeight: 600}}>
      {props.currentProduct.name}</div>
    {/* price information below */}

    {/* product Styles */}
    <StyleSelector currentProduct={props.currentProduct} style={props.style} id={props.id}/>
    <p>social media buttons</p>
  </div>
)}

export default ProductInfo;