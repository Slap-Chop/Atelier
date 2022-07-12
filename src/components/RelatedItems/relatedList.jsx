import React from 'react';
import ProductCard from './productCard.jsx';

var RelatedList = (props) => {


  return (
   <div style={{
    width: '30%',
    height: '100%',
    border: '1px solid red',
    overflow: 'auto',
    whiteSpace: 'nowrap'
   }}
   >{props.relatedProducts.map((product) => {
    return <ProductCard class="card" key= {product.id} product={product}/>
   })}</div>
  );
}

export default RelatedList;