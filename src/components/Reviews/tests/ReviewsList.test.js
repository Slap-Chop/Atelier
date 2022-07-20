import React from 'react';
import {shallow, mount, render} from 'enzyme';
import ReviewsList from '../ReviewsList.jsx';
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import toJson from 'enzyme-to-json'

describe('<ReviewsList/>', () => {

  //const reviewComponent = shallow(<Reviews className="reviews-container" style={testStyle}/>)

  it('should render without an error', () => {
    const wrapper = shallow(<ReviewsList reviews={[]}/>);
    console.log('SHALLOW', wrapper)
    expect(wrapper.contains(<label>Sort By</label>)).toBe(true);
  });

  it('should display a reviews score', () => {
    const wrapper = shallow(<ReviewsList reviews={[]}/>);
    const div = wrapper.find('select');
    expect(div.exists()).toBe(true);
  })

  // it('should have my styling rule', () => {
  //   expect(shallowReviewsList.Container).toHaveStyleRule('display', 'flex');
  //   expect(shallowReviewsList.Container).toHaveStyleRule('padding', '40');
  // });

  // it('should have options', () => {
  //   const wrapper = shallow(<ReviewsList reviews={[]}/>);
  //   console.log('SHALLOW', wrapper)
  // })

  // it('should display a reviews list', () => {
  //   const wrapper = shallow(<ReviewsList reviews={[]}/>);
  //   expect((ReviewsList).exists()).toBe(true);
  // })

  // it('should render styled', () => {
  //   expect(shallow(<Reviews/>)).toMatchSnapshot();
  // })
});

