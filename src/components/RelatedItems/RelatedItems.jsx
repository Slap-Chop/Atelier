import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import config from '../../../config.js';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: this.props.products.currentProduct.id,
      relatedProducts: []
    }
  }



  componentDidMount() {
    let ID = this.props.products.currentProduct.id
    var relatedProds = [];
    axios.defaults.headers.common['Authorization'] = config.TOKEN;
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${ID}/related`, { params: {product_id: ID
    }
    })
    .then((data) => {
      let relatedIDs = data.data;
      //map through array of related ID's and build url strings to make GET requests to GET product specific data
      relatedIDs = relatedIDs.map(id => {
        return `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}`
      });
      return relatedIDs;
    })
    .then((data) => {
      //send axios geet requests for all related products
      axios.all(data.map((endpoint) => axios.get(endpoint)))
      //map through axios responses , transform full response to just the data we want, set related products in state to an array of our related products data
      .then((data) => {data = data.map((res) => { return res.data});
      this.setState({relatedProducts: data})})
    })
    .catch((err) => console.log(err))}


  render() {
    return(<div>
      RelatedItems!
          </div>
    )
  }
}

export default RelatedItems;