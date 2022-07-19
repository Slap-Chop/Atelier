import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import ExpandedGallery from '../ExpandedGallery.jsx';

const expandedGallery = shallow(<ExpandedGallery
open={true}
xClick={jest.fn()}
photos={[{thumbnail_url: 'https://images.unsplash.com/photo-1534011546717-40…hcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80', url: 'https://images.unsplash.com/photo-1534011546717-40…cHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80'}]}
photoIndex={0}
thumbnails={[{thumbnail_url: "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
url: "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"}]}
offset={0}
LRClick={false}
handleLeft={jest.fn()}
handleRight={jest.fn()}
handleUp={jest.fn()}
handleDown={jest.fn()}
handleThumb={jest.fn()}
/>)

test('expandedGallery should render', () => {
  expect(toJson(expandedGallery)).toMatchSnapshot();
})

test('Expanded Gallery should zoom on image click and pan on mouse move', () => {
  expandedGallery.find('img.modalImage').simulate('click');
  expect(expandedGallery.instance().state.zoomed).toEqual(true);
  expandedGallery.find('img.modalImage').simulate('mouseMove')
})