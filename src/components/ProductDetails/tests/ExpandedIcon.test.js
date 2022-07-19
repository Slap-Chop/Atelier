import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import ExpandedIcon from '../ExpandedIcon.jsx';

const mockFunction = jest.fn();
const testIcon = shallow(<ExpandedIcon click={mockFunction}
photo={{thumbnail_url: 'https://images.unsplash.com/photo-1534011546717-40…hcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80', url: 'https://images.unsplash.com/photo-1534011546717-40…cHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80'}}/>)

test('Icons should render properly', () => {
  expect(toJson(testIcon)).toMatchSnapshot();
})

test('Clicking the icon image should call the function passed from props', () => {
  testIcon.find('img.expandedIcon').simulate('click');
  expect(mockFunction).toHaveBeenCalled();
})