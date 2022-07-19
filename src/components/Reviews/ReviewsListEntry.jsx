import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const ContainerCard = styled.div`
  border: 2px solid yellow;
  padding: 5px;
  position: relative;
`

const Username = styled.div`
  background-color: orange;
  position: absolute;
  top: 0;
  right: 0;
  float:right;
`
const Summary = styled.div`
  background-color: teal;
  weight: bold;
`
const Helpful = styled.div`
  background-color: teal;
  weight: bold;
`
const ShowMoreButton = styled.button`
  background-color: teal;
  weight: bold;
`

export default function ReviewsListEntry({review, calculateStars}) {

  const [summary, setSummary] = useState(review.summary.substring(0, 60));
  const [bodyTooLong, setBodyTooLong] = useState(review.body.length > 250);

  const date = new Date((review.date));
  const formattedDate = date.toLocaleString("en-us", {month: 'long', day:'numeric', year:'numeric'});
  // const stars = calculateStars({reviewsAvg: review.rating});
  const stars = calculateStars(undefined, review.rating);

  return (
    <ContainerCard>
      <div className="review">
        Review:
        <Summary>Summary: {review.summary}
          {stars.map(star => star)}
        </Summary>
        <div className="review-helpfulness">{review.helpfulness}</div>
        <Username>{review.reviewer_name}, {formattedDate}</Username>

        <div className="review-name">Rating: {review.rating}</div>
        <div className="response">Response: {review.response}</div>
        <div className="review-body">Body:
          {bodyTooLong ? review.body.slice(0, 250)
          : review.body}
        </div>
        {bodyTooLong && <button onClick={() => setBodyTooLong(false)}>Show More</button>}
        <div className="Helpful">Helpful?
          <a href="">Yes</a> ({review.helpfulness.count} )
          |
            <a href="">Report</a>
        </div>
      </div>
    </ContainerCard>
  )
}
