import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import config from '../../../config.js';
import ReviewsList from './ReviewsList.jsx';


export default function Reviews (props) {
  // constructor (props) {
  //   super(props);
  //   this.state = {
  //     reviews: []
  //   }
  //   this.getReviews = this.getReviews.bind(this);
  // }
  // hooks need to be called in order and can't be put in a condiiton
  const [productId, setProductId] = useState(props.id);
  const [reviews, setReviews] = useState([]);
  const [more, setMore] = useState(true);
  const [reviewsToShow, setReviewsToShow] = useState(2);

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = config.TOKEN;

    console.log('id', productId);
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews', {
      params: {product_id: '40344'}
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
      <div className="reviews">
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