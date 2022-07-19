import React from 'react';
import {shallow} from 'enzyme';
import StyleSelector from '../StyleSelector.jsx';
import toJson from 'enzyme-to-json';

const testProduct = {
  category: "Jackets",
  default_price: "140.00",
  description: "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  id: 40344,
  name: "Camo Onesie",
  slogan: "Blend in to your crowd"
}

const testStyles = [{
  'default?': true,
  name: "Forest Green & Black",
  original_price: "140.00",
  photos: [{
    thumbnail_url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
  }],
  sale_price: null,
  skus: {1394769: {quantity: 8, size: 'XS'}},
  style_id: 240500
},
{
  name: "Forest Green & Black",
  original_price: "140.00",
  photos: [{
    thumbnail_url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
  }],
  sale_price: null,
  skus: {1394769: {quantity: 8, size: 'XS'}},
  style_id: 240500
}]

const mockClick = jest.fn();

const testSelector = shallow(<StyleSelector
  currentProduct={testProduct}
  currentStyle={testStyles[0]}
  click={mockClick}
  id={240500}
  styles={testStyles}/>)

  test('Style Selector should render properly and stay consistent', () => {
    expect(toJson(testSelector)).toMatchSnapshot();
  })