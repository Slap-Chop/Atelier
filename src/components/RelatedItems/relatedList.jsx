import React from 'react';
import ProductCard from './productCard.jsx';
import OutfitList from './outfitList.jsx';
import ScrollRight from './scrollRightButton.jsx';
import ScrollLeft from './scrollLeftButton.jsx';

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

  <ScrollLeft scrollClickLeft={props.scrollClickLeft} scrollLeft={props.scrollLeft} products={props.relatedProducts}/>
   <div id="scroll-related" onScroll={props.scrollChange}style={{
    display: 'inline-block',
    marginLeft: '0px',
    marginRight: '0px',
    maxHeight: '280px',
    minHeight: '280px',
    whiteSpace: 'nowrap',
    overflow: 'auto',
    marginTop: '0px',
    scrollBehavior: 'smooth',
    width: 'auto'
   }}
   >
    {list}
   </div>

  <ScrollRight scrollLeft={props.scrollLeft} scrollClickRight={props.scrollClickRight} products={props.relatedProducts}/>
   </>
  );
}

export default RelatedList;