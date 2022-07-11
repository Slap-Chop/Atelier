import React from 'react';
import ReactDOM from 'react-dom';
import ProductInfo from './ProductInformation.jsx';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import Cart from './Cart.jsx';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(<div style={{border: '1px solid blue',
    display: 'flex',
    justifyContent: 'center' }}>
      <div style={{border: '1px solid red'}}><ImageGallery/></div>
      <ProductInfo currentProduct={this.props.currentProduct}/>
      <StyleSelector/>
      <Cart/>
    </div>

    )
  }
}

export default ProductDetails;