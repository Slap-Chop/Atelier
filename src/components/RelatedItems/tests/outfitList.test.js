import React from 'react';
import {shallow} from 'enzyme';
import OutfitList from '../outfitList.jsx';



var testOutfit = [
  {name: 'test'}
]



var outfitList = shallow(<OutfitList currentOutfit={testOutfit}/>)

test('OutfitList renders with props', () => {
  expect(outfitList.exists()).toEqual(true)
})
