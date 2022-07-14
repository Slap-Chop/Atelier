import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import config from '../../../config.js';
import RelatedList from './relatedList.jsx';
import OutfitList from './outfitList.jsx';


class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: null
    }
  }



  componentDidMount() {
    let ID = this.props.products.currentId
    var relatedProds = [];
    axios.defaults.headers.common['Authorization'] = config.TOKEN;
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${ID}/related`, { params: {product_id: ID
    }
    })
    .then((data) => {
      let relatedIDs = data.data;
      this.setState({related_IDs: relatedIDs});
      //map through array of related ID's and build url strings to make GET requests to GET product specific data
      relatedIDs = relatedIDs.map(id => {
        return `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}`
      });
      return relatedIDs;
    })
    .then((data) => {
      //send axios get requests for all related products
      axios.all(data.map((endpoint) => axios.get(endpoint)))
      //map through axios responses , transform full response object to just the data we want, set related products in state to an array of our related products data
      .then((data) => {data = data.map((res) => { return res.data});
      this.setState({relatedProducts: data}); return data})
      .catch((err) => console.log(err))
    })
    .then(() => {
      //map through related IDs and build URLs for Styles get requests.  We will need the default style to render our card image and set our price
      let IDs = this.state.related_IDs.map((id) => {
        return `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/styles`
      })
      return IDs;
    })
    .then((IDs) => {
      axios.all(IDs.map((endpoint) => axios.get(endpoint)))
      .then((res) => {
        // console.log(res, 'res 53');
        var data = res.map((styles, i) => {
        return styles.data
      })
      return data;
    })
    //filter results from GET requests
    .then((data) => {

      var newData = data.map((product) => {
        // console.log(product.results)
        var filtered = product.results.filter(style => style['default?']
        )
        if (filtered.length === 0) {
          filtered = [product.results[0]]
        }
        var defaultObj = {[product.product_id]: filtered[0]}
        return defaultObj;
      })
      return newData;
    })
    .then((newData) => {
      //extend the old related products state to include default keys with the product's default style as the value
    var relatedProducts = this.state.relatedProducts;
    relatedProducts = relatedProducts.map((product) => {
      for (let i = 0; i < newData.length; i++) {
        if (product.id === Number(Object.keys(newData[i])[0])) {
          product.default = newData[i][product.id]
        }
      }
      return product;
    })
    this.setState({relatedProducts: relatedProducts})
  })
  .then(() => {
//do the same thing for the reviews meta data...need to pull the star ratings values
    let IDs = this.state.related_IDs.map((id) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta`, {params: {product_id: id}})
    .then((res) => {
      let relObj = this.state.relatedProducts;
      for (let i = 0; i < relObj.length; i++) {
        if (relObj[i].id === Number(res.data.product_id)) {
          relObj[i].reviews = res.data
        }
      }
      this.setState({relatedProducts: relObj})
    }))
    return IDs;
  })
  .catch((err) => console.log(err))
    })
    .catch((err) => console.log(err))
  }


  render() {


    return (
      <>

        <div className="related-list" style={
          {display: 'flex', height: 'auto', overflow: 'auto', justifyContent: 'center', alignItems: 'center'}
        }>
        {this.state.relatedProducts ?  <RelatedList onClick={this.props.onClick} relatedProducts={this.state.relatedProducts}/> : null }
        </div>

        <div className="related-list" style={
          {display: 'flex', height: 'auto', overflow: 'auto', justifyContent: 'center', alignText: 'center'}
        }>
          <OutfitList currentProduct={this.props.products.currentProduct} currentOutfit={this.props.products.currentOutfit} onAddOutfit={this.props.onAddOutfit} onRemove={this.props.onRemove} defaultStyle={this.props.products.defaultStyle}/>
        </div>
        </>
    )
  }
  }


export default RelatedItems;