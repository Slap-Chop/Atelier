import React from 'react';
import axios from 'axios';
import config from '../../../config.js';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = config.TOKEN;
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${this.props.id}/styles`).then((data) => {
      console.log('style data in Style selector',data.data)
    })
  }

  render() {
    return(
      <div style={{border: '1px solid green'}}>
            <p>${this.props.currentProduct.default_price}</p>
          <div>Style > {this.props.style}</div>
          Style StyleSelector placeholder
    </div>
    )
  }

}




export default StyleSelector;