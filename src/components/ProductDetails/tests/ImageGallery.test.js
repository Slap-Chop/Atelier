import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import ImageGallery from '../ImageGallery.jsx';

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
  },
  {
    thumbnail_url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
  },
  {
    thumbnail_url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
  },
  {
    thumbnail_url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
  },
  {
    thumbnail_url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
  },
  {
    thumbnail_url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
  },
  {
    thumbnail_url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
  },
  {
    thumbnail_url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
  },
  ],
  sale_price: "111.00",
  skus: {
    1394769: {quantity: 8, size: 'XS'},
    1394770: {quantity: 100, size: 'M'},
    1394771: {quantity: 19, size: 'XL'}
  },
  style_id: 240501
}

const testId = 240500;
const testGallery = shallow(<ImageGallery style={testStyle} id={testId}/>)

test('Gallery should render properly and stay consistent', () => {
  expect(toJson(testGallery)).toMatchSnapshot();
})

test('Gallery should update properly', () => {


  const spy = jest.spyOn(ImageGallery.prototype, "componentDidUpdate")
  const wrapper = shallow(<ImageGallery style={testStyle} id={testId}/>)
  wrapper.setProps({
    style:diffTestStyle,
    id: 240501})
  expect(spy).toHaveBeenCalled();
  expect(wrapper.instance().state.photoIndex).toEqual(0);
})

test('Gallery should toggle expand on click', () => {
  testGallery.find('img.mainImage').simulate('click');
  expect(testGallery.instance().state.expanded).toEqual(true)
})

//need sample data with more than 7 photos

test('Gallery down and up arrows should change the offset on click', () => {
  const wrapper = shallow(<ImageGallery style={diffTestStyle} id={testId}/>)
  //click down arrow
  wrapper.find('img.vertArrow').simulate('click');
  expect(wrapper.instance().state.offset).toEqual(1);
  //click up arrow
  wrapper.find('img.vertArrow').simulate('click');
  expect(wrapper.instance().state.offset).toEqual(0)
})

test('Gallery left and right arrows should change photo on click', () => {
  const wrapper = shallow(<ImageGallery style={diffTestStyle} id={testId}/>)
  wrapper.find('div.rightArrowContainer').simulate('click');
  //right arrow click
  expect(wrapper.instance().state.photoIndex).toEqual(1);
  wrapper.find('div.leftArrowContainer').simulate('click');
  expect(wrapper.instance().state.photoIndex).toEqual(0)
})
