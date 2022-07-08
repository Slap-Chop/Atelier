import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import config from '../../../config.js';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: this.props.currentId
    }
  }



  componentDidMount() {
    console.log(this.props)

    // console.log(ID)
    axios.defaults.headers.common['Authorization'] = config.TOKEN;
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/:${this.props.currentId}`, {params: this.props.currentId})
    .then((data) => console.log(data))
  }


  render() {
    return(<div>
      RelatedItems!
          </div>
    )
  }
}

export default RelatedItems;