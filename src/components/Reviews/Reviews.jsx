import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import config from '../../../config.js';
import ReviewsList from './ReviewsList.jsx';


export default function Reviews ({id}) {

  const [productId, setProductId] = useState(id);
  const [reviews, setReviews] = useState([]);
  const [more, setMore] = useState(true);
  const [reviewsToShow, setReviewsToShow] = useState(2);

  const ReviewsListStyle = {
    overflow: 'auto',
    maxLength: '50%'
  }

  const reviewsStyleContainer = {
    display:'block',
    maxLength: 200,
    padding: 40,
    align: 'right'}

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = config.TOKEN;

    console.log('id', id);
    console.log('id', productId);
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews', {
      params: {product_id: productId}
    })
    .then((response) => {
      console.log('reponse', response);
      setReviews(response.data.results);
      console.log('REVIEWS:', reviews);
    })
    .catch((err) => console.log('err', err));
  }, [productId]);


  return (
    <>
      <div className="reviews-container" style={{display:'block', maxLength: 200, padding: 40, align: 'right'}}>
        Reviews:
        <ReviewsList reviews={reviews} more={more} setMore={setMore} reviewsToShow={reviewsToShow}
          setReviewsToShow={setReviewsToShow}
        />
      </div>
    </>
  )

}

/*
Container must have max height
*/