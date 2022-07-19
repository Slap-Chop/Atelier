import React from 'react';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';
import AddOutfit from '../addOutfit.jsx';
var sampleData = {currentProduct: {
  name: 'jumper'
}}


var shallowOutfitCard = shallow(<AddOutfit currentProduct={sampleData}/>)
test('addOutfit exists', () => {
  expect(shallowOutfitCard.exists()).toEqual(true)
})

describe('card should have a darker background', () => {
  it('should exist with a shadow background', () => {
    var wrapper = shallow(<AddOutfit currentProduct={sampleData}/>)
    expect(wrapper.find('.card').prop('style')).toHaveProperty('boxShadow', '0 4px 8px 0 rgba(0,0,0,0.2)');
  })
} )