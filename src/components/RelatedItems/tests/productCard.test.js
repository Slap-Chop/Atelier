import React from 'react';
import {shallow} from 'enzyme';
import ProductCard from '../productCard.jsx';

var testProduct = {
  default: {
    ['default?']: true,
    sale_price: null,
    photos: [{
      url: "testIMGURL",
      thumbnail_url: "testThumbnailIMGURL"
    }]
  },
  default_price: "69.00",
  name: "Black Lenses & Gold Frame",
  category: "Accessories"
}

var productCard = shallow(<ProductCard product={testProduct}/>)

test('ProductCard component renders with product attributes', () => {
  var testProduct = {
    default: {
      ['default?']: true,
      sale_price: null,
      photos: [{
        url: "testIMGURL",
        thumbnail_url: "testThumbnailIMGURL"
      }]
    },
    default_price: "69.00",
    name: "Black Lenses & Gold Frame",
    category: "Accessories"
  }
  var click = () => {};

  var productCard = shallow(<ProductCard product={testProduct}/>)

  expect(productCard.find('div.prodName').text()).toEqual("Black Lenses & Gold Frame")
  expect(productCard.find('div.price').text()).toEqual("69.00")
  expect(productCard.find('div.category').text()).toEqual("Accessories")
  expect(productCard.find('img').prop("src")).toEqual("testIMGURL")
})
