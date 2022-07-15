import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import config from '../../../config.js';
import ReviewsList from './ReviewsList.jsx';
import styled from 'styled-components';


export default function Reviews ({id}) {

  const [productId, setProductId] = useState(id);
  const [reviews, setReviews] = useState([]);
  const [more, setMore] = useState(true);
  const [reviewsToShow, setReviewsToShow] = useState(2);

  const reviewsListStyle = {
    'scroll-behavior': 'smooth',
    overflow: 'scroll'
  }

  const reviewsStyleContainer = {
    display: 'flex',
    height: 500,
    maxLength: 200,
    padding: 40,
    border: '3px solid black',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  }

  const reviewsCardStyle = {

  }

  const reviewsStarStyle = {

  }

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = config.TOKEN;

    console.log('id', id);
    console.log('id', productId);
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews', {
      params: {product_id: productId}
    })
    .then((response) => {
      setReviews(response.data.results);
    })
    .catch((err) => console.log('err', err));
  }, [productId]);


  return (
    <>
      <div className="reviews-container" style={reviewsStyleContainer}>
        Reviews:
        <ReviewsList reviews={reviews} more={more} setMore={setMore} reviewsToShow={reviewsToShow}
          setReviewsToShow={setReviewsToShow} style={reviewsListStyle}
        />
      </div>
    </>
  )

}

/*
Container must have max height
*/