import React from 'react';

class ProductCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }


  render() {
    if (this.props.product.default === undefined) {
      return (
        <></>
      )
    } else {
      return (
        <div className="card" style={
          {display: 'inline-block',
          border: '1px solid blue',
          margin: '10px'}
        }>
          <div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
          <img src={this.props.product.default.photos[0].url} style={{width:'50px'}, {height: '50px'}} alt="Image N/A"/>
          </div>

          <div className="container">
          <p className="category">{this.props.product.category}</p>
          <p className="name">{this.props.product.name}</p>
          <p className="price">{this.props.product.default_price}</p>
          <p className="rating">star rating to go here</p>
          </div>
        </div>
      )
    }

  }


}

export default ProductCard;