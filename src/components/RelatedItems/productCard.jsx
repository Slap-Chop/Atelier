import React from 'react';

class ProductCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    };
    this.onProdClick = this.onProdClick.bind(this);
    this.onActionClick = this.onActionClick.bind(this)
    this.mouseover = this.mouseover.bind(this);
    this.mouseout = this.mouseout.bind(this);
    this.cardOver= this.cardOver.bind(this);
    this.cardOut = this.cardOut.bind(this);
  }


  onProdClick(e) {
    e.preventDefault();
    this.props.onClick(this.props.product.id, this.props.product)
  }

  onActionClick(e) {
    e.preventDefault();
    console.log(this.props.product)
  }

  mouseover() {
    document.getElementById(`star${this.props.product.name}`).style.color = 'gold';
  }

  mouseout() {
    document.getElementById(`star${this.props.product.name}`).style.color = 'lightgrey';
  }

  cardOver() {
    document.getElementById(`S${this.props.product.name}`).style.boxShadow = '0 8px 16px 0 rgba(0,0,0,0.4)'
  }

  cardOut() {
    document.getElementById(`S${this.props.product.name}`).style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)'
  }

  render() {
    if (this.props.product.default === undefined) {
      return (
        <></>
      )
    } else {
      let price = <div style={{fontFamily: 'Georgia, serif', fontSize: '70%'}}className="price">{this.props.product.default_price}</div>
      //check to see if default style is currently for sale, if so, strike through default price and list current sale price instead
      if (this.props.product.default.sale_price) {
        price = <div style={{fontFamily: 'Georgia, serif', fontSize: '70%'}}className="price"><span style={{color: 'red', textDecoration: 'line-through'}}>{this.props.product.default_price}</span><span>{this.props.product.default.sale_price}</span></div>
      }

      return (
        <>

        <div  className="card" id={`S${this.props.product.name}`}  style={
          {display: 'inline-block',
          margin: '10px',
          width: '160px',
          minWidth: '160px',
          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
          tansition: '0.5s',
          borderRadius: '5%'
        }
        } onMouseOver={this.cardOver} onMouseOut={this.cardOut}>
          <div style={{display: 'flex', justifyContent: 'right', marginRight: '5px'}}>
          <span id={`star${this.props.product.name}`} style={{color: 'lightgrey', cursor: 'pointer'}} onMouseOver={this.mouseover} onMouseOut={this.mouseout} onClick={this.onActionClick}>&#9733;   </span>
          </div>
          <div onClick={this.onProdClick} style={{
            display: 'flex',
            justifyContent: 'center'
          }}>

          <img  src={this.props.product.default.photos[0].url} style={{height: '100px'}} alt="Image N/A"/>

          </div>

          <div onClick={this.onProdClick} className="container" style={{
            textAlign: 'center'
          }}>
          <div style={{fontFamily: 'Georgia, serif', fontSize: '70%'}}className="category">{this.props.product.category}</div>
          <div style={{fontFamily: 'Georgia, serif', fontSize: '70%'}}className="prodName" id={this.props.product.name}>{this.props.product.name}</div>
          {price}
          <div  style={{marginBottom:'5px'}} className="rating">star rating to go here</div>
          </div>
        </div>
        </>
      )
    }

  }


}

export default ProductCard;