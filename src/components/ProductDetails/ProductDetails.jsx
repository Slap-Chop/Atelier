import React from 'react';
import ReactDOM from 'react-dom';
import ProductInfo from './ProductInformation.jsx';
import ImageGallery from './ImageGallery.jsx';
import Cart from './Cart.jsx';
import axios from 'axios';
import config from '../../../config.js';
import facebookShare from './Images/facebookShare.png';
import twitterShare from './Images/twitterShare.png';
import pintrestShare from './Images/pintrestShare.png';
import './styles/ProductDetails.css';

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
          this.setState({currentStyle: result});
          this.props.updateStyle(result)
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
          this.setState({currentStyle: result});
          this.props.updateStyle(result)
        } else {
          this.props.updateStyle(data.data.results[0])
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
    return(
    <div>
      <div className='announcement'>SITE-WIDE ANNOUNCEMENT MESSAGE! SALE/DISCOUNT OFFER</div>

    <div className='productDetailsBody'>
      <div className='imageGalleryBody'>
        <ImageGallery style={this.state.currentStyle}
        id={this.state.id}
        /></div>
      <div>
        <div className='productInfoBody'>
        <ProductInfo
        currentProduct={this.props.currentProduct}
        scrollReview={this.props.scrollReview}
        styles={this.state.styles}
        calculateStars={this.props.calculateStars}
        reviewsAvgScore={this.props.reviewsAvgScore}
        currentStyle={this.state.currentStyle}
        click={this.handleStyleChange.bind(this)}
        id={this.props.id}/>
      <Cart currentStyle={this.state.currentStyle}
      currentProduct={this.props.currentProduct}/>
      <div className='productBorder'>
        <h5>{this.props.currentProduct.slogan}</h5>
        <p>{this.props.currentProduct.description}</p></div>
        <div className='share'>
        <div className="fb-share-button shareButton" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a></div>
        <div className='fb-share-button shareButton'>        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-text="Atelier Slap Chop is really neat! Come check it out!" data-hashtags="Slap-Chop" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script></div>

          <div className='fb-share-button share'><img className='shareButton' src={pintrestShare}/></div>

        </div>
      </div>
        </div>
    </div>
    </div>

    )
  }
}

export default ProductDetails;