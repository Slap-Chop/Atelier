import React from 'react';
import ProductCard from './productCard.jsx';
import OutfitList from './outfitList.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnRight } from '@fortawesome/free-solid-svg-icons'

var RelatedList = (props) => {
  var duplicateObj = {
    [props.currentProduct.id]: true
  }
  // console.log(props.relatedProducts, 'relProds')
  var relObj = props.relatedProducts;
  var dupChecker = (productsArray) => {
    productsArray.forEach((product, i) => {
      if (duplicateObj[product.id]) {
        relObj.splice(i, 1);
      } else {
        duplicateObj[product.id] = true;
      }
    })
    return relObj;
  }

  var prodArray = dupChecker(relObj);


  return (
    <>
   <div id="scroll" style={{
    display: 'inline-flex',
    marginLeft: '50px',
    marginRight: '50px',
    maxHeight: '100%',
    whiteSpace: 'nowrap',
    overflow: 'auto',
   }}
   >{prodArray.map((product, index) => {
      return <ProductCard class="card" key= {index} product={product} onClick={props.onClick} currentProduct={props.currentProduct}/>
   })}
    {/* <div style={{position: 'relative', float: 'right', bottom: '100px'}}>
      <FontAwesomeIcon icon={faArrowTurnRight} /> */}
     {/* </div> */}
   </div>
   </>
  );
}

export default RelatedList;