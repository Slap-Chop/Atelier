import React from 'react';
import {shallow, mount, render} from 'enzyme';
import ReviewsListEntry from '../ReviewsListEntry.jsx';
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import toJson from 'enzyme-to-json'

describe('<ReviewsListEntry/>', () => {
  const wrapper = shallow(<ReviewsListEntry review={{summary: 'test', body: 'testtest', helpfulness:'test', reviewer_name: 'test'}} calculateStars={() => []} />);

  it('should render without an error', () => {


    expect(wrapper.exists('.review')).toBe(true);
  });

});

