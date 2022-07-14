import React from 'react';
import {shallow} from 'enzyme';
import Reviews from '../Reviews.jsx';

test('Review component renders with a review', () => {
  const testStyle = {
    display:{},
    maxLength: 200,
    padding: 40,
    align: 'right'

  }

  const reviewComponent = shallow(<Reviews className="reviews-container" style={testStyle}/>)

  expect(reviewComponent.find('.display')).toEqual({});
})