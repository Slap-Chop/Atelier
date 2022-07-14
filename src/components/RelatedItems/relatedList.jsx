import React from 'react';
import ProductCard from './productCard.jsx';
import OutfitList from './outfitList.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnRight } from '@fortawesome/free-solid-svg-icons'

var RelatedList = (props) => {

  var listDiv = document.getElementById('scroll');
  if (listDiv) {
    listDiv.scroll = true;
  }

  return (
    <>
   <div id="scroll" style={{
    width: '40%',
    height: '100%',
    border: '1px solid red',
    whiteSpace: 'nowrap',
    overflow: 'auto',
   }}
   >{props.relatedProducts.map((product, index) => {
      return <ProductCard class="card" key= {product.id} product={product} onClick={props.onClick}/>
   })}
    {/* <div style={{position: 'relative', float: 'right', bottom: '100px'}}>
      <FontAwesomeIcon icon={faArrowTurnRight} /> */}
     {/* </div> */}
   </div>
   </>
  );
}

export default RelatedList;