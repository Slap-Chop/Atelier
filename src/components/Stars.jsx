import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const StarSpan = styled.span`
display: inline-block;
position: relative;
font-size: ${props => props.size};
color: #ddd;

  &:after {
    font-family: FontAwesome;
    content: "\f005";
    position: absolute;
    left: 0;
    top: 0;
    width: ${props => props.filled};
    overflow: hidden;
    color: #f80;
  }
`


export default function Star({starSize = 100, starFilledPercentage = 0}) {

  return (
  <>
    <StarSpan className="star fa fa-star" size={starSize} filled={starFilledPercentage}>
    </StarSpan>
  </>
  )
}