import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import config from '../../../config.js';
import ReviewsList from './ReviewsList.jsx';


class Reviews extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      reviews: []
    }
    this.getReviews = this.getReviews.bind(this);
  }
  // hooks need to be called in order and can't be put in a condiiton

  // passing in the default state is

  // runs the function only the very first time the page renders

  // doing it this way will only run the function once
  // const [count, setCount] = useState(() => {
  componentDidMount() {
    this.getReviews();
  }

  // });
  getReviews = () => {
    axios.defaults.headers.common['Authorization'] = config.TOKEN;

    console.log('id', this.props.id);
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews', {
      params: {product_id: '40344'}
    })
    .then((response) => {
      console.log('reponse', response);
      this.setState({reviews: response.data.results})
      console.log('REVIEWS:', this.state.reviews);
    })
    .catch((err) => console.log('err', err));

  }


  // return (
  //   <>
  //     <button onClick={decrementCount}>-</button>
  //     <span>{count}</span>
  //     <button>+</button>
  //   </>
  // )

  render() {
    return (
      <>
        <div>
          Reviews:
          <ReviewsList reviews={this.state.reviews}/>
        </div>

      </>
    )
    }
}


// class Reviews extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//     }
//   }

//   render() {
//     return(<div>
//       Reviews!
//     </div>

//     )
//   }
// }

export default Reviews;