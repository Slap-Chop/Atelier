import React from 'react';
import {shallow} from 'enzyme';
import QAndA from '../QAndA.jsx';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<QAndA />);
});

describe('<QAndA /> should render following elements', () => {

  it('should render one QnaSearch', () => {
    expect(wrapper.find(QnaSearch)).toHaveLength(1);
});

  it('should render one QnaSearch', () => {
    expect(wrapper.find(QnaList)).toHaveLength(1);
  });



});