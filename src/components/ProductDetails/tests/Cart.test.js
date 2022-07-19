import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Cart from '../Cart.jsx';


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

const diffTestStyle = {
  'default?': true,
  name: "Different Style",
  original_price: "1337.00",
  photos: [{
    thumbnail_url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
  }],
  sale_price: "111.00",
  skus: {
    1394769: {quantity: 8, size: 'XS'},
    1394770: {quantity: 100, size: 'M'},
    1394771: {quantity: 19, size: 'XL'}
  },
  style_id: 240500
}

const emptyTestStyle ={
  skus: {}
}

const testProduct ={
  category: "Jackets",
  default_price: "140.00",
  description: "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  id: 40344,
  name: "Camo Onesie",
  slogan: "Blend in to your crowd"
}

const testCart = shallow(<Cart currentStyle={testStyle} currentProduct={testProduct}/>)

//testing render to stay constant
test('Cart should render properly', () => {
  expect(toJson(testCart)).toMatchSnapshot();
})


//testing component did update
test('Cart should update properly', () => {
  const spy = jest.spyOn(Cart.prototype, "componentDidUpdate")
  const wrapper = shallow(<Cart currentStyle={testStyle} currentProduct={testProduct}/>)
  expect(spy).not.toHaveBeenCalled();
  wrapper.setProps({currentStyle:{diffTestStyle}, currentProduct: {testProduct}})
  expect(spy).toHaveBeenCalled();
})

//testing add to Cart hidden with no stock

test('Add to cart button should be hidden if there is no stock', () => {
  const wrapper = shallow(<Cart currentStyle={emptyTestStyle} currentProduct={testProduct}/>)
  expect(wrapper.find('button')).toHaveLength(0);
  expect(wrapper.instance().state.inStock).toEqual(false);
})

test('Changing size from dropdown should call handleSizeChange', () => {
  const spy = jest.spyOn(Cart.prototype, "handleSizeChange");
  const wrapper = shallow(<Cart currentStyle={diffTestStyle} currentProduct={testProduct}/>)
  expect(spy).not.toHaveBeenCalled();
  expect(wrapper.find('select.sizeMenu')).toHaveLength(1);
  wrapper.instance().state.stock = {1394771: {quantity: 100, size: 'M'}}
  wrapper.find('select.sizeMenu').at(0).simulate('change', {
    target: {value: 1394771}
  })
  expect(spy).toHaveBeenCalled();
})

test('Changing quant from dropdown should call handleQuantChange', () => {
  const spy = jest.spyOn(Cart.prototype, "handleQuantChange");
  const wrapper = shallow(<Cart currentStyle={diffTestStyle} currentProduct={testProduct}/>)
  expect(spy).not.toHaveBeenCalled();
  expect(wrapper.find('select.quantityMenu')).toHaveLength(1);
  wrapper.instance().state.stock = {1394771: {quantity: 100, size: 'M'}}
  wrapper.find('select.quantityMenu').at(0).simulate('change', {
    target: {value: 5}
  })
  expect(spy).toHaveBeenCalled();
  expect(wrapper.instance().state.quantity).toEqual(5)
})

test('Clicking Add Cart should call handleAddCart', () => {
  const spy = jest.spyOn(Cart.prototype, "handleAddCart");
  const wrapper = shallow(<Cart currentStyle={diffTestStyle} currentProduct={testProduct}/>)
  expect(spy).not.toHaveBeenCalled();
  wrapper.instance().state.stock = {1394771: {quantity: 100, size: 'M'}}
  wrapper.find('select.sizeMenu').at(0).simulate('change', {
    target: {value: 1394771}
  })
  wrapper.find('button').simulate('click');
  expect(spy).toHaveBeenCalled();
})