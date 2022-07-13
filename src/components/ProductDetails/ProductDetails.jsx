import React from 'react';
import ReactDOM from 'react-dom';
import ProductInfo from './ProductInformation.jsx';
import ImageGallery from './ImageGallery.jsx';
import Cart from './Cart.jsx';
import axios from 'axios';
import config from '../../../config.js';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [],
      currentStyle: {},
      id: 0
    }
  }

  componentDidMount() {
    this.state.id = this.props.id
    axios.defaults.headers.common['Authorization'] = config.TOKEN;
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${this.state.id}/styles`).then((data) => {
      // console.log('style data in Style selector',data.data.results)
      this.setState({styles: data.data.results, currentStyle:data.data.results[0]})
      data.data.results.forEach((result) => {
        if (result["default?"]) {
          // console.log('enter default')
          this.setState({currentStyle: result})
        }
      })
    })
  }

  componentDidUpdate() {
    if (this.state.id !== this.props.id) {
      this.setState({id: this.props.id});
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${this.props.id}/styles`).then((data) => {
      // console.log('style data in Style selector update',data.data.results)
      this.setState({styles: data.data.results, currentStyle:data.data.results[0]})
      data.data.results.forEach((result) => {
        if (result["default?"]) {
          // console.log('enter default')
          this.setState({currentStyle: result})
        }
      })
    })

    }
    // console.log(this.state.currentStyle, this.props.id, this.props.currentProduct)
  }

  handleStyleChange(style) {
    this.setState({currentStyle: style});
  }


  render() {
    return(<div style={{border: '1px solid blue',
    display: 'flex',
    justifyContent: 'center' }}>
      <div style={{
        border: '1px solid red',
        width: '80%'
        }}>
        <ImageGallery style={this.state.currentStyle}/></div>
      <div>
      <ProductInfo currentProduct={this.props.currentProduct}
      styles={this.state.styles}
      currentStyle={this.state.currentStyle}
      click={this.handleStyleChange.bind(this)}
      id={this.props.id}/>
      <Cart currentStyle={this.state.currentStyle}
      currentProduct={this.props.currentProduct}/>
      <p>social media buttons</p>
      <div style={{border: '1px solid green'}}>
        <h5>{this.props.currentProduct.slogan}</h5>
        <p>{this.props.currentProduct.description}</p></div>
      </div>

    </div>

    )
  }
}

export default ProductDetails;