import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import ProductDetails from '../ProductDetails.jsx';

const testList = [{
  category: "Jackets",
  default_price: "140.00",
  description: "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  id: 40344,
  name: "Camo Onesie",
  slogan: "Blend in to your crowd"
},
{
  category: "Jackets",
  default_price: "140.00",
  description: "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  id: 40345,
  name: "Camo Onesie",
  slogan: "Blend in to your crowd"
},
{
  category: "Jackets",
  default_price: "140.00",
  description: "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  id: 40346,
  name: "Camo Onesie",
  slogan: "Blend in to your crowd"
},
{
  category: "Jackets",
  default_price: "140.00",
  description: "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  id: 40347,
  name: "Camo Onesie",
  slogan: "Blend in to your crowd"
},
];

const testProduct = {
  category: "Jackets",
  default_price: "140.00",
  description: "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  id: 40344,
  name: "Camo Onesie",
  slogan: "Blend in to your crowd"
}

const testDetails = shallow(<ProductDetails
  updateStyle={jest.fn()}
  products={testList}
  id={40344}
  scrollReview={jest.fn()}
  calculateStars={jest.fn()}
  reviewsAvgScore={jest.fn()}
  currentProduct={testProduct}/>)

  test('Component should render properly and stay consistent', () => {
    expect(toJson(testDetails)).toMatchSnapshot();
  })

  test('Component should update properly', () => {


    const spy = jest.spyOn(ProductDetails.prototype, "componentDidUpdate")
    const wrapper = shallow(<ProductDetails
      updateStyle={jest.fn()}
      products={testList}
      id={40344}
      scrollReview={jest.fn()}
      calculateStars={jest.fn()}
      reviewsAvgScore={jest.fn()}
      currentProduct={testProduct}/>)
    wrapper.setProps({
      id: 240501})
    expect(spy).toHaveBeenCalled();
  })