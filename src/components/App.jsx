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
    axios.defaults.headers.common['Authorization'] = config.TOKEN;
    axios.get("https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products").then((data) => {
      console.log(data.data)
    })
  }

  render() {
    return(<div>
      Hi friends!
      npm run react-dev should open a live listener of webpack,
      then if you refresh the index.html you have open it should update it all!
      <div><ProductDetails/></div>
      <div><QAndA/></div>
      <div><RelatedItems/></div>
      <div><Reviews/></div>
    </div>

    )
  }

}


export default App;