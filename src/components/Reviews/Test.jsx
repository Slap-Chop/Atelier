import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


const Reviews = (props) => {
  // hooks need to be called in order and can't be put in a condiiton

  // passing in the default state is

  // runs the function only the very first time the page renders

  // doing it this way will only run the function once
  // const [count, setCount] = useState(() => {

  // });
  const getReviews = () => {
    axios.get('/reviews', (res, req) => {

    })
  }

  // will run every time the page re-renders
  // const [count, setCount] = useState(someFunc());
  // first thing in array is always CURRENT STATE
    // count = current state
  // second thing in array is always the function that allows us to UPDATE current state
    // setCount
  const [count, setCount] = useState(4);

  const decrementCount = () => {
    // setCount(count - 1);
    // setCount(() => {

    // })

    // doing this way will pass in the previous value is passed in
    setCount(prevCount => prevCount - 1);
  }


  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button>+</button>
    </>
  )

  // return (
  //   <>
  //     <div> </div>
  //   </>
  // )
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