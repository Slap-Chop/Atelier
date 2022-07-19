import React from 'react';
import {shallow} from 'enzyme';
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

var outfitCard = shallow(<OutfitCard product={testProduct}/>)

test('OutfitCard component renders with product attributes', () => {

  expect(outfitCard.find('div.name').text()).toEqual("Black Lenses & Gold Frame")
  expect(outfitCard.find('div.price').text()).toEqual("69.00")
  expect(outfitCard.find('div.category').text()).toEqual("Accessories")
  expect(outfitCard.find('img').prop("src")).toEqual("testThumbnailIMGURL")
})