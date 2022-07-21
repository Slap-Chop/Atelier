import React from 'react';
import noImage from '../ProductDetails/Images/noImage.png';

class OutfitCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      setReview: null
    };
    // this.onProdClick = this.onProdClick.bind(this);
    // this.onActionClick = this.onActionClick.bind(this)
    this.onRemove = this.onRemove.bind(this);
    this.mouseover = this.mouseover.bind(this);
    this.mouseout = this.mouseout.bind(this);
    this.cardOver= this.cardOver.bind(this);
    this.cardOut = this.cardOut.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    var stars = this.props.calculateStars(undefined, this.props.product.reviews)
    this.setState({setReview: stars})
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
    document.getElementById(`J${this.props.product.name}`).style.boxShadow = '0 2px 4px 0 rgba(0,0,0,0.4)';
    document.getElementById(`J${this.props.product.name}`).style.opacity = '100%'
  }

  cardOut() {
    document.getElementById(`J${this.props.product.name}`).style.boxShadow = '0 1px 3px 0 rgba(0,0,0,0.2)';
    document.getElementById(`J${this.props.product.name}`).style.opacity = '90%'
  }

  render() {

      let price = <div className="price">{this.props.product.default_price}</div>
      // check to see if default style is currently for sale, if so, strike through default price and list current sale price instead
      // if ((this.props.product.default.sale_price)) {
      //   price = <div className="price"><span style={{color: 'red', textDecoration: 'line-through'}}>{this.props.product.default_price}</span><span>{this.props.product.default.sale_price}</span></div>
      // }
      var photo = this.props.product.defaultStyle.photos[0].thumbnail_url;
      if (this.props.product.defaultStyle.photos[0].thumbnail_url === null) {
        photo = noImage;
      }




      return (

        <>

        <div  className="card"  id={`J${this.props.product.name}`} style={
          {display: 'inline-block',
          margin: '3px',
          width: '160px',
          minWidth: '160px',
          boxShadow: '0 1px 3px 0 rgba(0,0,0,0.2)',
          transition: 'all 0.1s linear',
          marginBottom: '3px',
          borderRadius: '2%',
          backgroundColor: 'lightgrey',
          opacity: '90%'
        }
        } onMouseOver={this.cardOver} onMouseOut={this.cardOut}>

          <div onClick={this.onProdClick} style={{
            justifyContent: 'center',
            backgroundImage: `url(${photo})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            minHeight: '200px',
            borderRadius: '1%',
          }}>
             <div style={{
              display: 'flex',
              justifyContent: 'right',
              marginRight: '5px'}}>
          <span className="deletebtn" id={`X${this.props.product.name}`} product={this.props.product} style={{color: 'lightgrey', cursor: 'pointer', transition: '0.1s'}} onMouseOver={this.mouseover} onMouseOut={this.mouseout} onClick={this.onRemove}>&#10005;   </span>
          </div>


          </div>

          <div onClick={this.onProdClick} className="container" style={{
            textAlign: 'center',

          }}>
          <div style={{cursor: 'default', fontFamily: 'Georgia, serif', fontSize: '70%'}}className="category">{this.props.product.category}</div>
          <div style={{cursor: 'default', fontFamily: 'Georgia, serif', fontSize: '70%'}}className="name">{this.props.product.name}</div>
          {price}
          <div className="rating">{this.state.setReview ? this.state.setReview.map(star => star) : null}</div>
          </div>

        </div>
        </>
      )


  }


}

export default OutfitCard;