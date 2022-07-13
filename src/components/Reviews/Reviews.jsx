import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import config from '../../../config.js';
import ReviewsList from './ReviewsList.jsx';


export default function Reviews (props) {

  const [productId, setProductId] = useState(props.id);
  const [reviews, setReviews] = useState([]);
  const [more, setMore] = useState(true);
  const [reviewsToShow, setReviewsToShow] = useState(2);

  const ReviewsListStyle = {
    overflow: 'auto',
    maxLength: '50%'
  }

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = config.TOKEN;

    console.log('id', productId);
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews', {
      params: {product_id: props.id}
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
      <div className="reviews" style={{display:'block', maxLength: 200, padding: 40, align: 'right'}}>
        Reviews:
        <select style={ReviewsListStyle}>
          <option>test</option>
        </select>
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