import React, {useState, useEffect} from 'react';
import ReviewsListEntry from './ReviewsListEntry.jsx';
import NewReviewModal from './NewReviewModal.jsx'
import styled from 'styled-components';

const Container = styled.div`
  flex: 2;
  overflow: scroll;
  width: 90%;
  max-width: 900px;
  padding: 10px;
  align-items: flex-start;
  padding-left: 50px;
  top: 0;
`

export default function ReviewsList ({reviewsToShow, reviews, more, setMore, setReviewsToShow, calculateStars, product}) {

  const [sort, setSort] = useState({option1: 'Helpful', option2: 'Newest', option3: 'Relevant'})
  const [showModal, setShowModal] = useState(false);

  function showMoreReviews() {

    let reviewsCount = reviewsToShow;
    reviewsCount < reviews.length ? setReviewsToShow(reviewsCount +  2)
    // : reviewsCount === reviews.length - 1 ? setReviewsToShow(reviewsCount + 1)
    : setMore(false);
  }

  function createNewReviewModal() {
    setShowModal(true);
  }

  return (
    <>
      <Container>
        <label>Sort By</label>
        <select>
          <option value="">{sort.option1}</option>
          <option value="">{sort.option2}</option>
          <option value="">{sort.option3}</option>
        </select>
        <div>
          <ul>
            {reviews.slice(0, reviewsToShow).map((review, i) => <ReviewsListEntry review={review} calculateStars={calculateStars} key={i}/>)}
          </ul>
        </div>

        {more ? <button onClick={showMoreReviews}>More Reviews</button> : <button disabled={true}>No more reviews</button>}
        <button onClick={createNewReviewModal}>New Review</button>
        {showModal ? <NewReviewModal productName={product} setShowModal={setShowModal}/> : null}
      </Container>
    </>
  )

}

