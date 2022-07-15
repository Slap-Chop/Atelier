import React from 'react';

const ReviewsListEntry = ({review}) => {
  return (
    <div className="reviews-card">
      <div className="review">
        Review:
        <div className="review-helpfulness">{review.helpfulness}</div>
        <div className="review-name">Rating: {review.rating}</div>
        <div className="review-date">Date: {review.date}</div>
        <div className="review-body">Body: {review.body}</div>
        <div className="review-summary">{review.reviewer_name}</div>
        <div className="">{review.summary}</div>
      </div>
    </div>
  )
}

export default ReviewsListEntry;
