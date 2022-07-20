import React from 'react';
import {shallow, mount} from 'enzyme';
import Reviews from '../Reviews.jsx';
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import toJson from 'enzyme-to-json'


describe('<Reviews/>', () => {


  const shallowReviews = shallow(<Reviews/>);
  console.log('SHALLOW', shallowReviews)

  it('should render without an error', () => {
    expect(shallowReviews.contains(<div>Ratings & Reviews</div>)).toBe(true);
  });

  it('should display a reviews score', () => {
    const div = shallowReviews.find('div');
    expect(div.exists()).toBe(true);
    expect(div.text()).toEqual('Ratings & Reviews');
  })

});

