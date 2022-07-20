import React from 'react';

class OutfitCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    };
    // this.onProdClick = this.onProdClick.bind(this);
    // this.onActionClick = this.onActionClick.bind(this)
    this.onRemove = this.onRemove.bind(this);
    this.mouseover = this.mouseover.bind(this);
    this.mouseout = this.mouseout.bind(this);
    this.cardOver= this.cardOver.bind(this);
    this.cardOut = this.cardOut.bind(this);
  }


  onRemove(e) {
    e.preventDefault();
    this.props.onRemove(this.props.product)
  }
  mouseover() {
    document.getElementById(`X${this.props.product.name}`).style.color = 'darkgrey';
  }

  mouseout() {
    document.getElementById(`X${this.props.product.name}`).style.color = 'lightgrey';
  }
  cardOver() {
    document.getElementById(`J${this.props.product.name}`).style.boxShadow = '0 8px 16px 0 rgba(0,0,0,0.4)'
  }

  cardOut() {
    document.getElementById(`J${this.props.product.name}`).style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)'
  }

  render() {

      let price = <div className="price">{this.props.product.default_price}</div>
      // check to see if default style is currently for sale, if so, strike through default price and list current sale price instead
      // if ((this.props.product.default.sale_price)) {
      //   price = <div className="price"><span style={{color: 'red', textDecoration: 'line-through'}}>{this.props.product.default_price}</span><span>{this.props.product.default.sale_price}</span></div>
      // }

      return (
        <>

        <div  className="card"  id={`J${this.props.product.name}`} style={
          {display: 'inline-block',
          margin: '2%',
          marginLeft: '10px',
          marginRight: '10px',
          minWidth: '160px',
          height: '195px',
          justifyContent: 'center',
          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
          tansition: '0.5s',
          borderRadius: '5%'
        }
        } onMouseOver={this.cardOver} onMouseOut={this.cardOut}>
          <div style={{display: 'flex', justifyContent: 'right', marginRight: '5px'}}>
          <span className="deletebtn" id={`X${this.props.product.name}`} product={this.props.product} style={{color: 'lightgrey', cursor: 'pointer'}} onMouseOver={this.mouseover} onMouseOut={this.mouseout} onClick={this.onRemove}>&#10005;   </span>
          </div>
          <div onClick={this.onProdClick} style={{
            display: 'flex',
            justifyContent: 'center'
          }}>

          <img  src={this.props.product.defaultStyle.photos[0].thumbnail_url} style={{height: '100px'}} alt="Image N/A"/>

          </div>

          <div onClick={this.onProdClick} className="container" style={{
            textAlign: 'center',

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