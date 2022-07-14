import React from 'react';

class OutfitCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    };
    // this.onProdClick = this.onProdClick.bind(this);
    // this.onActionClick = this.onActionClick.bind(this)
  }


  // onProdClick(e) {
  //   e.preventDefault();
  //   this.props.onClick(this.props.product.id, this.props.product)
  // }

  // onActionClick(e) {
  //   e.preventDefault();
  //   console.log(this.props.product)
  // }

  render() {

      let price = <div className="name">{this.props.product.default_price}</div>
      //check to see if default style is currently for sale, if so, strike through default price and list current sale price instead
      // if (this.props.product.default.sale_price) {
      //   price = <div className="price"><span style={{color: 'red', textDecoration: 'line-through'}}>{this.props.product.default_price}</span><span>{this.props.product.default.sale_price}</span></div>
      // }

      return (
        <>

        <div  className="card"  style={
          {display: 'inline-block',
          border: '1px solid blue',
          margin: '2%',
          width: '160px',
          height: '195px',
          justifyContent: 'center'

        }
        }>
          <div style={{display: 'flex', justifyContent: 'right'}}>
          <button onClick={this.onActionClick}>*</button>
          </div>
          <div onClick={this.onProdClick} style={{
            display: 'flex',
            justifyContent: 'center'
          }}>

          <img  src="" style={{height: '100px'}} alt="Image N/A"/>

          </div>

          <div onClick={this.onProdClick} className="container" style={{
            textAlign: 'center'
          }}>
          <div className="category">{this.props.product.category}</div>
          <div className="name">{this.props.product.name}</div>
          {price}
          <div className="rating">star rating to go here</div>
          </div>

        </div>
        </>
      )


  }


}

export default OutfitCard;