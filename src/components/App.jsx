import React, {Component, createRef} from 'react';
import ReactDOM from 'react-dom';
import ProductDetails from './ProductDetails/ProductDetails.jsx';
import QAndA from './QAndA/QAndA.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import Reviews from './Reviews/Reviews.jsx';
import Star from './Stars.jsx';
import axios from 'axios';
import config from '../../config.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {},
      productList: [],
      currentId: 40344,
      currentOutfit: [],
      reviewsMeta: {},
      reviewsAvgScore: null
    }
    this.reviewRef = createRef();

    this.relatedProdClick = this.relatedProdClick.bind(this);
    this.addOutfitClick = this.addOutfitClick.bind(this);
    this.removeOutfitLick = this.removeOutfitLick.bind(this);
    this.updateStyle = this.updateStyle.bind(this);
    this.calculateAverageReviews = this.calculateAverageReviews.bind(this);
    this.calculateStars = this.calculateStars.bind(this);
  }

  componentDidMount() {
    //setting header to include our Auth token
    axios.defaults.headers.common['Authorization'] = config.TOKEN;
    //getting list of products from the API
    axios.get("https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products").then((data) => {
      this.setState({productList : data.data});
      //if the list contains item, set current item to first item in the list as a default
      if (data.data.length > 0) {
        this.setState({currentProduct: data.data[0]})
        console.log('App current product on mount:', this.state.currentProduct)
        //set the id for the current product
        this.setState({currentId: data.data[0].id})
        console.log('App currentId on mount:', this.state.currentId)
      }
    }).then(() => {
      return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${this.state.currentId}`, {params: {product_id: this.state.currentId}})
    }).then((response) => {
      var updateCurrent = this.state.currentProduct;
      updateCurrent.features = response.data.features;
      this.setState({currentProduct: updateCurrent})
    }).then(() => this.calculateAverageReviews())
    .catch((err) => console.log('Error getting reviews meta data', err))
  }

  calculateAverageReviews() {

    axios.get("https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta",
    {params: {product_id: this.state.currentId}})
    .then((response) =>
      this.setState({reviewsMeta: response.data}))
    .then(() => {
      let totalReviews = Object.values(this.state.reviewsMeta.ratings);
      let ratingsObj = this.state.reviewsMeta.ratings;
      let totalCountOfAllReviews = 0;

      let numScores = [];
      // Need to convert all the number strings into integers
      // push converted values into our numScores array
      totalReviews.forEach((score) => numScores.push(Math.floor(score)));
      // Add to total count of ratings
      numScores.forEach((rating) => totalCountOfAllReviews+=rating);

      // round the average to the nearest tenth decimal place
      let avg = Math.round(((1*numScores[0] + 2*numScores[1] + 3*numScores[2] + 4*numScores[3] + 5*numScores[4]) / totalCountOfAllReviews) * 10) / 10;

      this.setState({reviewsAvgScore: avg});
    })
    .catch((err) => console.log('Error in getting reviews meta data', err));

  }

  calculateStars(size = '100', reviewsAvg=this.state.reviewsAvgScore) {
    // The visual for rating should be representative of up to a quarter of a review point.
    let scoreDecimal = (reviewsAvg % 1).toFixed(1);
    let starFilledPercentage = 0;
    // if score is 0
    scoreDecimal <= .1 ? starFilledPercentage = 0
    : scoreDecimal > .1 && scoreDecimal <= .3 ? starFilledPercentage = '25%'
    : scoreDecimal > .3 && scoreDecimal <= .6 ? starFilledPercentage = '50%'
    : scoreDecimal > .6 && scoreDecimal <= .8 ? starFilledPercentage = '75%'
    : starFilledPercentage = '100%';

    let wholeStarCount = (reviewsAvg - scoreDecimal).toFixed(1);
    // create an array of Stars
    const allStarsArray = [];

    let starsGeneratorCount = 5;
    while (starsGeneratorCount > 0) {
      wholeStarCount >= 1 ? allStarsArray.push(<Star starSize={size} starFilledPercentage={'100%'} key={starsGeneratorCount}/>)
      : wholeStarCount >= 0 ? allStarsArray.push(<Star starSize={size} starFilledPercentage={starFilledPercentage} key={starsGeneratorCount}/>)
      : allStarsArray.push(<Star starSize={size} starFilledPercentage={'0%'} key={starsGeneratorCount}/>)

      wholeStarCount--;
      starsGeneratorCount--;
    }

    return allStarsArray;
  }

  updateStyle(style) {
    this.setState({defaultStyle: style})
  }

  relatedProdClick(id, product) {
    this.setState({currentId: id, currentProduct: product}, () => this.calculateAverageReviews())

  }

  addOutfitClick(product) {
    let filtered = this.state.currentOutfit.filter(item => item.id === product.id);
    if (filtered.length > 0) {
      return;
    } else {
      let outFit = this.state.currentOutfit;
      outFit.unshift(product)
      this.setState({currentOutfit: outFit})
    }
  }

  removeOutfitLick(product) {
    let outfit = this.state.currentOutfit;
    for (var i = 0; i < outfit.length; i++) {
      if (product.id === outfit[i].id) {
        outfit.splice(i, 1);
        break;
      }
    }
    this.setState({currentOutfit: outfit})
  }

  scrollToReviews() {
    this.reviewRef.current.scrollIntoView()
  }

  render() {
    return(<div>
      {/* Hi friends!
      npm run react-dev should open a live listener of webpack,
      in another terminal do npm run server-dev and navigate to localhost:8000 to view the app! */}
      <div><ProductDetails updateStyle={this.updateStyle}
      products={this.state.productList}
      id={this.state.currentId}
      scrollReview={this.scrollToReviews.bind(this)}
      calculateStars={this.calculateStars}
      reviewsAvgScore={this.state.reviewsAvgScore}
      currentProduct={this.state.currentProduct}/></div>
      <div><QAndA productId={this.state.currentId}/></div>
      <div><RelatedItems key={this.state.currentId} reviewsAvgScore={this.state.reviewsAvgScore} calculateStars={this.calculateStars} products={this.state} onClick={this.relatedProdClick} onAddOutfit={this.addOutfitClick} onRemove={this.removeOutfitLick}/></div>
      <div ref={this.reviewRef}><Reviews key={this.state.currentId} id={this.state.currentId} calculateStars={this.calculateStars} reviewsAvgScore={this.state.reviewsAvgScore} allRatings={this.state.reviewsMeta.ratings}/></div>
    </div>

    )
  }

}


export default App;