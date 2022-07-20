import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import OutfitCard from '../outfitCard.jsx';


var testProduct = {
  defaultStyle: {
  default: {
    ['default?']: true,
    sale_price: null,
    photos: [{
      url: "testIMGURL",
      thumbnail_url: "testThumbnailIMGURL"
    }]
  },
  photos: [{
    url: "testIMGURL",
    thumbnail_url: "testThumbnailIMGURL"
  }],
  default_price: "69.00",
  name: "Black Lenses & Gold Frame",
  category: "Accessories"
},
default_price: "69.00",
name: "Black Lenses & Gold Frame",
category: "Accessories"
}



test('OutfitCard component renders with product attributes', () => {

var fakeClick = jest.fn();
var spy = jest.spyOn(OutfitCard.prototype,
  "cardOver")
  var outfitCard = shallow(<OutfitCard product={testProduct} onClick={fakeClick}/>)

  expect(outfitCard.find('div.name').text()).toEqual("Black Lenses & Gold Frame")
  expect(outfitCard.find('div.price').text()).toEqual("69.00")
  expect(outfitCard.find('div.category').text()).toEqual("Accessories")
  expect(outfitCard.find('img').prop("src")).toEqual("testThumbnailIMGURL")
})
