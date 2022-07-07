import React from 'react';
import ReactDOM from 'react-dom';

class QAndA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    }
  }

  //  axios.get('/qa/questions', {params: {this.props.productId}})
  // .then(() => {
  //   setState({
  //     data:res.data.results
  //   })
  // })

  render() {
    return(<div>
      Q And A!
    </div>

    )
  }
}

export default QAndA;