import React from 'react';
import {shallow} from 'enzyme';
import ProductCard from '../productCard.jsx';

test('ProductCard component renders with product name', () => {
  var testProduct = {
    default: {
      ['default?']: true,
      sale_price: null,
      photos: [{
        url: null,
        thumbnail_url: null
      }]
    },
    default_price: "69.00",
    name: "Black Lenses & Gold Frame",
    category: "Accessories"
  }
  var click = () => {};

  var productCard = shallow(<ProductCard product={testProduct}/>)

  expect(productCard.find('div.prodName').text()).toEqual("Black Lenses & Gold Frame")
})