import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import FullImageModal from './FullImageModal.jsx';
import axios from 'axios';

const ContainerCard = styled.div`

  padding: 5px;
  position: relative;
`

const Username = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  float:right;
`
const Summary = styled.h4`
  weight: bold;
`
const Helpful = styled.div`
  background-color: teal;
  weight: bold;
`
const ShowMoreButton = styled.button`
  weight: bold;
`

const Photos = styled.img`
  max-width: 50px;
  max-height: 50px;
`

export default function ReviewsListEntry({review, calculateStars}) {

  const [summary, setSummary] = useState(review.summary.substring(0, 60));
  const [bodyTooLong, setBodyTooLong] = useState(review.body.length > 250);
  const [reviewId, setReviewId] = useState(review.review_id);
  const [showFullImg, setShowFullImg] = useState(false);
  const [fullImg, setFullImg] = useState();

  const date = new Date((review.date));
  const formattedDate = date.toLocaleString("en-us", {month: 'long', day:'numeric', year:'numeric'});
  // const stars = calculateStars({reviewsAvg: review.rating});
  const stars = calculateStars(undefined, review.rating);

  function updateHelpfulness() {
    console.log('id', reviewId)
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${reviewId}/helpful`)
    .then(response => console.log('saved helpfulness', response.status))
    .catch(err => console.log('Error updating helpfulness of review', err))
  }

  function reportReview() {
    console.log('id', reviewId)
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${reviewId}/report`)
    .then(response => console.log('reported ', response.status))
    .catch(err => console.log('Error reporting review', err))
  }

  function openImgFullSize(photo) {
    setShowFullImg(true);
    setFullImg(photo);
  }


  return (
    <ContainerCard>
      <div className="review">
        {stars.map(star => star)}
        <Summary>{review.summary}
        </Summary>
        <Username>{review.reviewer_name}, {formattedDate}</Username>

        {/* <div className="review-name">Rating: {review.rating}</div> */}
        {review.response ? <div className="response">Response:
         {review.response}</div> : null}
        <div className="review-body">
          {bodyTooLong ? review.body.slice(0, 250)
          : review.body}
        </div>

        {review.photos.length > 0 && review.photos.map((photo,i) =>
        <Photos onClick={() => openImgFullSize(photo.url)} src={photo.url} key={i}>
        </Photos>
        )}
        {showFullImg && <FullImageModal img={fullImg} setShowFullImg={setShowFullImg}/>}

        {bodyTooLong && <button onClick={() => setBodyTooLong(false)}>Show More</button>}
        <div className="Helpful"> Helpful?
          <a href="#" onClick={() => updateHelpfulness()}>Yes</a> ({review.helpfulness}) |
          <a href="#" onClick={() => reportReview()}> Report</a>
        </div>
      </div>
    </ContainerCard>
  )
}
