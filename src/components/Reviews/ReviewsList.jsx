import React, {useState, useEffect} from 'react';
import ReviewsListEntry from './ReviewsListEntry.jsx';

export default function ReviewsList ({reviewsToShow, reviews, more, setMore, setReviewsToShow}) {

  const [sort, setSort] = useState({option1: 'Helpful', option2: 'Newest', option3: 'Relevant'})

  function showMoreReviews() {

    let reviewsCount = reviewsToShow;
    reviewsCount < reviews.length ? setReviewsToShow(reviewsCount +  2) : setMore(false);

    console.log('NEW COUNT', reviewsToShow)
  }


  return (
    <>
    <label>Sort By</label>
    <select>
      <option value="">{sort.option1}</option>
      <option value="">{sort.option2}</option>
      <option value="">{sort.option3}</option>
    </select>
    <select>
      <option value="">TEST2</option>
    </select>
    <div>
      <ul>
        {reviews.slice(0, reviewsToShow).map((review, i) => <ReviewsListEntry review={review} key={i}/>)}
      </ul>
    </div>

    {more ? <button onClick={showMoreReviews}>More Reviews</button> : <button disabled={true}>No more reviews</button>}
    </>
  )

}

