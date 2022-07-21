import React from 'react';
import {shallow, mount} from 'enzyme';
import QAndA from '../QAndA.jsx';
import QnaSearch from '../QnaSearch';
import QnaList from '../QnaList';


let wrapper, btns;
const dummyClick = jest.fn();
beforeEach(() => {
  wrapper = shallow(<QAndA  click={dummyClick}/>);
});

describe('<QAndA /> should render following elements', () => {

  it('should render one QAndA component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render one QnaSearch component', () => {
    expect(wrapper.find(QnaSearch)).toHaveLength(1);
});

  it('should render one QnaList component', () => {
    expect(wrapper.find(QnaList)).toHaveLength(1);
  });




});