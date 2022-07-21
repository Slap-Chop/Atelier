import React from 'react';
import ProductCard from './productCard.jsx';
import OutfitList from './outfitList.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnRight } from '@fortawesome/free-solid-svg-icons'

var RelatedList = (props) => {
  if (props.relatedProducts[0] === undefined) {
    var relObj = props.relatedProductsBackUp;
  } else {
    var relObj = props.relatedProducts;
  }
    var duplicateObj = {
      [props.currentProduct.id]: true
    }
    // console.log(relObj, 'relProds')

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
    // console.log(prodArray)
    var list = prodArray.map((product, index) => {
      return <ProductCard class="card" key={index} product={product}  score={product.reviews}onClick={props.onClick} calculateStars={props.calculateStars}currentProduct={props.currentProduct}/>
   })






  return (
    <>
   <div id="scroll" style={{
    display: 'inline-flex',
    marginLeft: '0px',
    marginRight: '50px',
    maxHeight: '100%',
    whiteSpace: 'nowrap',
    overflow: 'auto',
    marginTop: '0px',
   }}
   >{list}
    {/* <div style={{position: 'relative', float: 'right', bottom: '100px'}}>
      <FontAwesomeIcon icon={faArrowTurnRight} /> */}
     {/* </div> */}
   </div>
   </>
  );
}

export default RelatedList;