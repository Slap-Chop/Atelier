import React from 'react';

const ProductInfo = (props) => {
  console.log('currentProduct:', props.currentProduct)
  return (
  <div style={{border: '1px solid blue'}}>
    Review star component
    <h2><p>{props.currentProduct.category}</p> {props.currentProduct.name}</h2>
    <p>${props.currentProduct.default_price}</p>
    <p>Product Overview, sometimes exists</p>
    <p>social media buttons</p>
  </div>
)}

export default ProductInfo;