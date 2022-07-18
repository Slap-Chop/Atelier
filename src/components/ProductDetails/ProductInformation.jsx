import React from 'react';
import StyleSelector from './StyleSelector.jsx';

const ProductInfo = (props) => {
  // console.log('currentProduct:', props.currentProduct)
  // console.log('product infostyles', props.styles)
  let stars = props.calculateStars(props.reviewsAvgScore);
  console.log(stars)
  return (
  <div className='productBorder'>
    <div>
      {stars.map(star => star)} Read all reviews
    </div>
    {/* product name and category */}
    <div>{props.currentProduct.category}</div>
    <div className='productName'>
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