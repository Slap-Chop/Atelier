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
      product_id: null,
      scrollLeft: 0
    }
    this.calcAvg = this.calcAvg.bind(this)
    this.scrollClickRight = this.scrollClickRight.bind(this);
    this.scrollClickLeft = this.scrollClickLeft.bind(this);
    this.scrollChange = this.scrollChange.bind(this)
  }



  componentDidMount() {
    var specData;
    let ID = this.props.products.currentId
    var relatedProds = [];
    axios.defaults.headers.common['Authorization'] = config.TOKEN;
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${ID}/related`, {
      params: {
        product_id: ID
      }
    })
      .then((data) => {
        let relatedIDs = data.data;
        if (relatedIDs.length === 0) {
          relatedIDs = [40344]
        }
        // console.log(relatedIDs)
        this.setState({ related_IDs: relatedIDs });
        //map through array of related ID's and build url strings to make GET requests to GET product specific data
        // console.log(relatedIDs, '35')
        relatedIDs = relatedIDs.map(id => {
          return `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}`
        });
        return relatedIDs;
      }).then((data) => {
        //send axios get requests for all related products
        axios.all(data.map((endpoint) => axios.get(endpoint)))
          //map through axios responses , transform full response object to just the data we want, set related products in state to an array of our related products data
          .then((data) => { data = data.map((res) => { return res.data }); return data })
          .then((data) => {
            // console.log(data, '49')
            this.setState({ relatedProducts: data }, ()=>{return})
          })
          .catch((err) => console.log(err))
      }).then(() => {
        //map through related IDs and build URLs for Styles get requests.  We will need the default style to render our card image and set our price
        let IDs = this.state.related_IDs.map((id) => {
          return `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/styles`
        });
        return IDs;
      }).then((IDs) => {
        // console.log(IDs, '60')
        return axios.all(IDs.map((endpoint) => axios.get(endpoint)))
      })
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
          var defaultObj = { [product.product_id]: filtered[0] }
          return defaultObj;
        })
        // console.log(newData, '82');
        return newData;
      })
      .then((newData) => {
        //extend the old related products state to include default keys with the product's default style as the value
        var relatedProducts;
        // console.log(this.state.relatedProducts, '88')
        if (this.state.relatedProducts) {


        relatedProducts = this.state.relatedProducts.map((product) => {
          if(newData) {


          for (let i = 0; i < newData.length; i++) {
            if (product.id === Number(Object.keys(newData[i])[0])) {
              product.default = newData[i][product.id]
            }
          }
          return product;
        }

        })

        this.setState({ relatedProducts: relatedProducts })}
      })
      .then(() => {
        //do the same thing for the reviews meta data...need to pull the star ratings values
        // console.log(this.state.related_IDs, '101')
        let IDs = this.state.related_IDs.map((id) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta`, { params: { product_id: id } })
          .then((res) => {
            let relObj = this.state.relatedProducts;
            for (let i = 0; i < relObj.length; i++) {
              if (relObj[i].id === Number(res.data.product_id)) {
                relObj[i].reviews = this.calcAvg(res.data.ratings)
              }
            }
            this.setState({ relatedProducts: relObj });
          }))
        return IDs;
      })
      .catch((err) => console.log(err))

      .catch((err) => console.log(err))
  }

  calcAvg(reviews) {
    let totalReviews = Object.values(reviews);
      let ratingsObj = reviews
      let totalCountOfAllReviews = 0;

      let numScores = [];
      // Need to convert all the number strings into integers
      // push converted values into our numScores array
      totalReviews.forEach((score) => numScores.push(Math.floor(score)));
      // Add to total count of ratings
      numScores.forEach((rating) => totalCountOfAllReviews+=rating);

      // round the average to the nearest tenth decimal place
      let avg = Math.round(((1*numScores[0] + 2*numScores[1] + 3*numScores[2] + 4*numScores[3] + 5*numScores[4]) / totalCountOfAllReviews) * 10) / 10;

      return avg;
  }

  componentDidUpdate(prevState) {
    if (prevState.relatedProducts !== this.state.relatedProducts) {
    }
  }


  scrollChange(e) {
    e.preventDefault();
    var left = document.getElementById('scroll-related').scrollLeft;
    this.setState({scrollLeft: left})
  }

  scrollClickRight(e) {
    e.preventDefault();
    document.getElementById('scroll-related').scrollLeft += 168;
    this.setState({scrollLeft: document.getElementById('scroll-related').scrollLeft})
  }

  scrollClickLeft(e) {
    e.preventDefault();

    document.getElementById('scroll-related').scrollLeft -= 168
    this.setState({scrollLeft: document.getElementById('scroll-related').scrollLeft})
  }

  scrollClickOutfitR(e) {
    e.preventDefault();
    document.getElementById('scroll-related').scrollLeft += 169;
    this.setState({scrollLeft: document.getElementById('scroll-related').scrollLeft})
  }

  scrollClickOutfitL(e) {
    e.preventDefault();

    document.getElementById('scroll-related').scrollLeft -= 169
    this.setState({scrollLeft: document.getElementById('scroll-related').scrollLeft})
  }




  render() {

    return (
      <>
        <div style={{ display: 'flex', height: 'auto', overflow: 'auto', justifyContent: 'center', alignItems: 'top', margin: '5px',marginTop: '3px', fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", fontSize: '0.8rem', color: 'rgb(86, 81, 81)'
         }}>Related Products</div>

        <div id='related-list'className="related-list" style={
          { display: 'flex', height: 'auto', paddingTop: '10px', width: 'auto', overflow: 'auto', overflowY: 'hidden', justifyContent: 'center', maxHeight: '250px', alignItems: 'center'}
        }>
          {this.state.relatedProducts ? <RelatedList scrollLeft={this.state.scrollLeft} calculateStars={this.props.calculateStars} scrollClickRight={this.scrollClickRight} scrollClickLeft={this.scrollClickLeft} scrollChange={this.scrollChange} reviewsAvgScore={this.props.reviewsAvgScore}onClick={this.props.onClick} relatedProducts={this.state.relatedProducts} relatedProductsBackUp={this.props.products.productList} currentProduct={this.props.products.currentProduct} /> : null}
        </div>
        <div  style={{ display: 'flex', height: 'auto', overflow: 'auto', overflowY: "hidden", justifyContent: 'center', alignItems: 'center', marginTop: '0px', marginBottom: '0px', fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", fontSize: '0.8rem', color: 'rgb(86, 81, 81)' }}>My Outfit</div>

        <div className="OutfitList" style={
          { display: 'flex', height: 'auto', overflow: 'auto', overflowY: "hidden", justifyContent: 'center', alignText: 'center', maxHeight: '265px'}
        }>
          <OutfitList  scrollClickRight={this.scrollClickRight} scrollClickLeft={this.scrollClickLeft} scrollChange={this.scrollChange} reviewsAvgScore={this.props.reviewsAvgScore} calculateStars={this.props.calculateStars} currentProduct={this.props.products.currentProduct} currentOutfit={this.props.products.currentOutfit} onAddOutfit={this.props.onAddOutfit} onRemove={this.props.onRemove} defaultStyle={this.props.products.defaultStyle} />
        </div>
      </>
    )
  }
}


export default RelatedItems;
