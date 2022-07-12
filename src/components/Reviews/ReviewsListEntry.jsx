import React from 'react';

const ReviewsListEntry = ({review}) => {
  return (
    <div className="reviews-card">
      <div className="review">
        Review:
        <p>{review.body}</p>
      </div>
    </div>
  )
}

export default ReviewsListEntry;
