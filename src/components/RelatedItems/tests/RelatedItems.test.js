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
var wrapper = shallow(<RelatedItems key={1234}
  products={testData}
  onClick={jest.fn()}
  onRemove={jest.fn()}
  onAddOutfit={jest.fn()}
/>)

test('Lists Mount', () => {
  var spy = jest.spyOn(RelatedItems.prototype, "componentDidMount");
  expect(wrapper.exists()).toEqual(true);
  wrapper.instance().componentDidMount();
  expect(spy).toHaveBeenCalled();
})
