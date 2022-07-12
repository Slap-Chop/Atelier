import React from 'react';
import ProductCard from './productCard.jsx';

var RelatedList = (props) => {


  return (
   <div style={{
    width: 'auto',
    height: '100%',
    border: '1px solid red',
    whiteSpace: 'nowrap'
   }}
   >{props.relatedProducts.map((product, index) => {
      return <ProductCard class="card" key= {product.id} product={product}/>
   })}</div>
  );
}

export default RelatedList;