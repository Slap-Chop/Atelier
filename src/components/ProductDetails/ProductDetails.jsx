import React from 'react';
import ReactDOM from 'react-dom';
import ProductInfo from './ProductInformation.jsx';
import ImageGallery from './ImageGallery.jsx';
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
      <div style={{border: '1px solid red'}}>
        <ImageGallery/></div>
      <div>
      <ProductInfo currentProduct={this.props.currentProduct}
      style={"style placeholder"} id={this.props.id}/>
      <Cart/>
      <div style={{border: '1px solid green'}}>
        <h5>{this.props.currentProduct.slogan}</h5>
        <p>{this.props.currentProduct.description}</p></div>
      </div>

    </div>

    )
  }
}

export default ProductDetails;