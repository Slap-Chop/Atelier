import React from 'react';
import {shallow, mount} from 'enzyme';
import Reviews from '../Reviews.jsx';
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import toJson from 'enzyme-to-json'


describe('<Reviews/>', () => {

  //const reviewComponent = shallow(<Reviews className="reviews-container" style={testStyle}/>)

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

  // it('should have my styling rule', () => {
  //   expect(shallowReviews.Container).toHaveStyleRule('display', 'flex');
  //   expect(shallowReviews.Container).toHaveStyleRule('padding', '40');
  // });

  // it('should display a reviews list', () => {
  //   expect(shallowReviews.exists(<ReviewsList/>)).toBe(true);
  // })

  // it('should render styled', () => {
  //   expect(shallow(<Reviews/>)).toMatchSnapshot();
  // })
});

