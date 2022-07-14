import React from 'react';

const ReviewsListEntry = ({review}) => {
  return (
    <div className="reviews-card">
      <div className="review">
        Review:
        <p>{review.body}</p>
        <p>{review.helpfulness}</p>
        <p>{review.reviewer_name}</p>
        <p>{review.summary}</p>
      </div>
    </div>
  )
}

export default ReviewsListEntry;
