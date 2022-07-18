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


export default function ReviewsListEntry({review}) {

  const [summary, setSummary] = useState(review.summary.substring(0, 60));


  const date = new Date((review.date));
  const formattedDate = date.toLocaleString("en-us", {month: 'long', day:'numeric', year:'numeric'});

  return (
    <ContainerCard>
      <div className="review">
        Review:
        <Summary>Summary: {review.summary}</Summary>
        <div className="review-helpfulness">{review.helpfulness}</div>
        <Username>{review.reviewer_name}</Username>
        <div className="review-name">Rating: {review.rating}</div>
        <div className="review-date">Date: {formattedDate}</div>
        <div className="review-body">Body: {review.body}</div>
      </div>
    </ContainerCard>
  )
}
