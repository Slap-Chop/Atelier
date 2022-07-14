import React from 'react';
import {shallow} from 'enzyme';
import StyleComponent from '../StyleComponent.jsx';

test('Style component renders with a picture', () => {
  const testStyle = {
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
  }
  const dummyClick = () => {};

  const styleComponent = shallow(<StyleComponent style={testStyle} click={dummyClick}/>)

  expect(styleComponent.find('img.thumbnail').prop('src')).toEqual("https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80")
})