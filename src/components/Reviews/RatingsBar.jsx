import React, {useState, useEffect} from 'react';
import styled from 'styled-components';


const BarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  padding: 10px;

`

const BarScore = styled.label`
  order: 1;

`

const Bar = styled.div`
  order: 2;
  align-items: center;
  height: 10px;
  position: relative;
  background: 	#888888;
  border-radius: 20px;
  bottom: -5px;
  width: 60%;
`

const BarSpan = styled.span`
  display: block;
  height: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  position: relative;
  background-color: #006400;
  overflow: hidden;
  width: ${props => props.filled};
`

const RatingTotal = styled.span`
  display: block;
  order: 3;

`

export default function RatingsBar ({scoreNumber, barFilledPercentage = 0, ratingTotalCount}) {

  return (
    <>
      <BarContainer>
        <BarScore>{scoreNumber} stars</BarScore>
        <Bar>
          <BarSpan className="ratings bar" filled={barFilledPercentage}></BarSpan>
        </Bar>
        <RatingTotal>{ratingTotalCount}</RatingTotal>
      </BarContainer>

    </>
  )
}