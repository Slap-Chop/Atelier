import React from 'react';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';
import RelatedList from '../relatedList.jsx';

var testProduct = [
  {name: 'test',
    id: '3'
}
]

var outfitList = shallow(<RelatedList currentProduct={testProduct[0]} relatedProducts={testProduct}/>)

test('RelatedList renders', () => {
  expect(outfitList.exists()).toEqual(true)
})