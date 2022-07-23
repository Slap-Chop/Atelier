import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import config from '../../../config.js';
import ReviewsList from './ReviewsList.jsx';
import RatingsBar from './RatingsBar.jsx';
import styled from 'styled-components';

const reviewsListStyle = {
  'scroll-behavior': 'smooth',
  'overflow': 'scroll',
  'display': 'flex'
}

const Container = styled.div`
  display: flex;
  max-height: 200;

  align-items: flex-start;
  overflow: scroll;
  flex-direction: row;
  font-family:'Franklin Gothic Medium', Arial, sans-serif;
`

const RatingBreakdownContainer = styled.div`
  flex: 1;
  width: 10%;
  display: flex;
  flex-direction: column;
`
const TopBreakdown = styled.div`
  order: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
`

const RatingsScore = styled.div`
  flex: 1;
  height: 50;
  padding: 50;
  font-size: 150px;
  weight: bold;
`

const RatingsBarsContainer = styled.div`
  order: 3;
  justify-content: center;
`
const Recommendation = styled.div`

`

const StarsContainer = styled.div`

`

export default function Reviews ({id, calculateStars, reviewsAvgScore, allRatings, productName}) {

  const [productId, setProductId] = useState(id);
  // const [avgScore, setAvgScore] = useState(reviewsAvgScore);
  const [reviews, setReviews] = useState([]);
  const [more, setMore] = useState(true);
  const [reviewsToShow, setReviewsToShow] = useState(2);
  const [stars, setStars] = useState([]);
  const [bars, setBars] = useState([]);
  const [ratings, setRatings] = useState({});
  const [totalReviews, setTotalReviews] = useState();


  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = config.TOKEN;

    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews', {
      params: {product_id: productId}
    })
    .then((response) => {
      setReviews(response.data.results);
    })
    .then(() => setStars(calculateStars()))
    .then(() => setBars(generateBars()))
    .catch((err) => console.log('err', err));

    //setStars(calculateStars());
    console.log('reviews average score', reviewsAvgScore);
  }, [reviewsAvgScore]);

  function generateBars() {

    let ratingsCounts = Object.values(allRatings);

    let ratingCountValue = [];
    let totalReviewCount = 0;

    // Convert values from string to int
    ratingsCounts.forEach((count) => ratingCountValue.push(Math.floor(count)));
    ratingCountValue.forEach(rating => totalReviewCount+= rating);


    setTotalReviews(totalReviewCount);

    const allBarsArray = [];


    let barCount = 5;
    while (barCount > 0) {
      let ratingTotal = ratingsCounts[barCount-1];

      let percentage = (ratingTotal / totalReviewCount) * 100;

      allBarsArray.push(<RatingsBar scoreNumber={barCount} barFilledPercentage={`${percentage}%`} ratingTotalCount={Math.round(ratingTotal)} key={barCount}/>);

      barCount--;
    }

    return allBarsArray;
  }

  return (
    <>
      <Container>
        <RatingBreakdownContainer>
        <div>Ratings & Reviews</div>
          <TopBreakdown>
            <RatingsScore>{reviewsAvgScore}
            </RatingsScore>
            {stars.map(star => star)}
          </TopBreakdown>

          <RatingsBarsContainer>
            {bars.map(bar => bar)}
          </RatingsBarsContainer>
          <Recommendation></Recommendation>
        </RatingBreakdownContainer>

        <ReviewsList reviews={reviews} more={more} setMore={setMore} reviewsToShow={reviewsToShow}
          setReviewsToShow={setReviewsToShow} calculateStars={calculateStars} product={productName}
        />
      </Container>
    </>
  )

}

/*
Container must have max height
*/