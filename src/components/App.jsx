import React from 'react';
import ReactDOM from 'react-dom';
import ProductDetails from './ProductDetails/ProductDetails.jsx';
import QAndA from './QAndA/QAndA.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import Reviews from './Reviews/Reviews.jsx';
import axios from 'axios';
import config from '../../config.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {},
      productList: [],
      currentId: 40344,
      currentOutfit: [],
    }
    this.relatedProdClick = this.relatedProdClick.bind(this);
    this.addOutfitClick = this.addOutfitClick.bind(this);
  }

  componentDidMount() {
    //setting header to include our Auth token
    axios.defaults.headers.common['Authorization'] = config.TOKEN;
    //getting list of products from the API
    axios.get("https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products").then((data) => {
      this.setState({productList : data.data});
      //if the list contains item, set current item to first item in the list as a default
      if (this.state.productList.length > 0) {
        this.setState({currentProduct: this.state.productList[0]})
        console.log('App current product on mount:', this.state.currentProduct)
        //set the id for the current product
        this.setState({currentId: this.state.currentProduct.id})
        console.log('App currentId on mount:', this.state.currentId)
      }
    })
  }

  relatedProdClick(id, product) {
    this.setState({currentId: id, currentProduct: product})
  }

  addOutfitClick(product) {
    let filtered = this.state.currentOutfit.filter(item => item.id === product.id);
    console.log(filtered)
    if (filtered.length > 0) {
      return;
    } else {
      var outFit = this.state.currentOutfit;
      outFit.push(product)
      this.setState({currentOutfit: outFit})
    }
  }

  render() {
    return(<div>
      Hi friends!
      npm run react-dev should open a live listener of webpack,
      in another terminal do npm run server-dev and navigate to localhost:8000 to view the app!
      <div><ProductDetails
      products={this.state.productList}
      id={this.state.currentId}
      currentProduct={this.state.currentProduct}/></div>
      <div><QAndA productId={this.state.currentId}/></div>
      <div><RelatedItems key={this.state.currentId} products={this.state} onClick={this.relatedProdClick} onAddOutfit={this.addOutfitClick}/></div>
      <div><Reviews id={this.state.currentId}/></div>
    </div>

    )
  }

}


export default App;