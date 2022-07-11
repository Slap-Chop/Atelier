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
      currentId: 1,
    }
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



  render() {
    return(<div>
      Hi friends!
      npm run react-dev should open a live listener of webpack,
      then if you refresh the index.html you have open it should update it all!
      <div><ProductDetails products={this.state.productList}/></div>
      <div><QAndA productId={this.state.currentId}/></div>
      <div>{this.state.currentProduct.id ? <RelatedItems products={this.state}/> : null}</div>
      <div><Reviews/></div>
    </div>

    )
  }

}


export default App;