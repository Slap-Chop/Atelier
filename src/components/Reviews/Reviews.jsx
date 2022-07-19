import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import config from '../../../config.js';
import ReviewsList from './ReviewsList.jsx';
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
  justify-content: space-between;
  ${'' /* align-items: flex-start; */}
  overflow: scroll;
`

const reviewsCardStyle = {

}

const reviewsStarStyle = {

}


export default function Reviews ({id, calculateStars, reviewsAvgScore}) {

  const [productId, setProductId] = useState(id);
  // const [avgScore, setAvgScore] = useState(reviewsAvgScore);
  const [reviews, setReviews] = useState([]);
  const [more, setMore] = useState(true);
  const [reviewsToShow, setReviewsToShow] = useState(2);
  const [stars, setStars] = useState([]);


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


  return (
    <>
      <Container>
        Reviews:
        {stars.map(star => star)}
        <ReviewsList reviews={reviews} more={more} setMore={setMore} reviewsToShow={reviewsToShow}
          setReviewsToShow={setReviewsToShow} style={reviewsListStyle}
        />
      </Container>
    </>
  )

}

/*
Container must have max height
*/