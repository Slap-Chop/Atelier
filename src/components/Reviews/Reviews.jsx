import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import config from '../../../config.js';
import ReviewsList from './ReviewsList.jsx';
import RatingsBar from './RatingsBar.jsx';
import styled from 'styled-components';

const reviewsListStyle = {
  'scroll-behavior': 'smooth',
  overflow: 'scroll'
}

const Container = styled.div`
  display: flex;
  max-height: 200;
  padding: 40;
  border: 3px solid black;
  align-items: flex-start;
  overflow: scroll;
  flex-direction: row;
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
  ${'' /* justify-content: space-evenly; */}
  align-content: space-between;
`

const RatingsScore = styled.div`
  order: 2;
  height: 50;
  padding: 50;
  font-size: 150px;
  position: static;
  weight: bold;
  align-items: center;
`

const RatingsBarsContainer = styled.div`
  order: 3;
  justify-content: center;
`


export default function Reviews ({id, calculateStars, reviewsAvgScore, allRatings}) {

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
    .catch((err) => console.log('err', err));

    setStars(calculateStars());
    console.log('reviews average score', reviewsAvgScore);
  }, [reviewsAvgScore]);

  function generateBars() {

    let ratingsCounts = Object.values(allRatings);
    let totalReviewCount = 0;
    ratingsCounts.forEach(rating => totalReviews+= rating);


    setTotalReviews(totalReviewCount);

    const allBarsArray = [];

    let barCount = 5;
    while (barCount > 0) {
      //allBarsArray.push(<RatingsBar number={barCount} starFilledPercentage={}/>)
    }
  }

  return (
    <>
      <Container>
        <RatingBreakdownContainer>

          <TopBreakdown>
            <div>Ratings & Reviews</div>
            {stars.map(star => star)}
          </TopBreakdown>

          <RatingsScore>{reviewsAvgScore}</RatingsScore>
          <div>Total: {}</div>
          <RatingsBarsContainer>
            <RatingsBar number={10} barFilledPercentage={'75%'}/>
          </RatingsBarsContainer>
        </RatingBreakdownContainer>

        <ReviewsList reviews={reviews} more={more} setMore={setMore} reviewsToShow={reviewsToShow}
          setReviewsToShow={setReviewsToShow} style={reviewsListStyle} calculateStars={calculateStars}
        />
      </Container>
    </>
  )

}

/*
Container must have max height
*/