import React from 'react';
import StyleSelector from './StyleSelector.jsx';

const ProductInfo = (props) => {
  // console.log('currentProduct:', props.currentProduct)
  // console.log('product infostyles', props.styles)
  return (
  <div style={{
    border: '1px solid blue'
    }}>
    <p>Review star component</p>
    {/* product name and category */}
    <div>{props.currentProduct.category}</div>
    <div className="ProductName" style={{fontSize: 24,
      fontWeight: 600}}>
      {props.currentProduct.name}</div>
    {/* product Styles */}
    {/* {console.log('product info props',props)} */}
    <StyleSelector currentProduct={props.currentProduct}
    currentStyle={props.currentStyle}
    click={props.click}
    id={props.id}
    styles={props.styles}/>
  </div>
)}

export default ProductInfo;