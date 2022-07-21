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
    const select = wrapper.find('select');
    expect(select.exists()).toBe(true);
  })

  it('should display a reviews score', () => {
    const wrapper = shallow(<ReviewsList reviews={[]}/>);
    const option = wrapper.find('option');
    expect(option.exists()).toBe(true);
  })

  it('should display a reviews score', () => {
    const wrapper = shallow(<ReviewsList reviews={[]}/>);
    const ul = wrapper.find('ul');
    expect(ul.exists()).toBe(true);
  })

});

