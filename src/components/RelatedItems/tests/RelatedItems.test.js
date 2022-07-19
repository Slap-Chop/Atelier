import React from 'react';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';
import RelatedItems from '../RelatedItems.jsx';

var testOutfit = [
  {name: 'test'}
]

var testData = {
  currentProduct: {
    id: 'test'
  }
}
var wrapper = shallow(<RelatedItems products={testData}/>)

test('Lists Mount', () => {
  expect(wrapper.exists()).toEqual(true)
})
