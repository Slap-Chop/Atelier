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
          <img src={this.props.product.default.photos[0].url} style={{height: '100px'}} alt="Image N/A"/>
          </div>

          <div className="container" style={{
            textAlign: 'center'
          }}>
          <div className="category">{this.props.product.category}</div>
          <div className="name">{this.props.product.name}</div>
          <div className="price">{this.props.product.default_price}</div>
          <div className="rating">star rating to go here</div>
          </div>
        </div>
      )
    }

  }


}

export default ProductCard;