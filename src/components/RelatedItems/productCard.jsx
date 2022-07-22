import React from 'react';
import ComparisonModal from './comparisonModal.jsx';
import noImage from '../ProductDetails/Images/noImage.png';

class ProductCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comparisonState: false
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
    let compState = this.state.comparisonState;
    this.setState({comparisonState: !compState})
  }

  mouseover() {
    document.getElementById(`star${this.props.product.name}`).style.color = 'gold';
  }

  mouseout() {
    document.getElementById(`star${this.props.product.name}`).style.color = 'lightgrey';
  }

  cardOver() {
    // document.getElementById(`S${this.props.product.name}`).style.boxShadow = '0 2px 4px 0 rgba(0,0,0,0.4)';
    document.getElementById(`S${this.props.product.name}`).style.opacity = '100%'
  }

  cardOut() {
    // document.getElementById(`S${this.props.product.name}`).style.boxShadow = '0 1px 3px 0 rgba(0,0,0,0.2)';
    document.getElementById(`S${this.props.product.name}`).style.opacity = '85%'
  }



  render() {
    if (this.props.product.default === undefined || this.props.score === undefined) {
      return (
        <></>
      )

    } else {
      let price = <div style={{color: 'dimgray', cursor: 'default', fontFamily: 'Georgia, serif', fontSize: '70%'}}className="price">{this.props.product.default_price}</div>
      //check to see if default style is currently for sale, if so, strike through default price and list current sale price instead
      if (this.props.product.default.sale_price) {
        price = <div style={{color: 'dimgray', cursor: 'default', fontFamily: 'Georgia, serif', fontSize: '70%'}}className="price"><span style={{color: 'red', textDecoration: 'line-through'}}>{this.props.product.default_price}</span><span>{this.props.product.default.sale_price}</span></div>
      }

      if (this.props.score !== undefined) {
        var stars = this.props.calculateStars(undefined, this.props.score)
      }

      var photo = this.props.product.default.photos[0].thumbnail_url;
      if (this.props.product.default.photos[0].thumbnail_url === null) {
        photo = noImage;
      }





      return (
        <>

        <div id={`S${this.props.product.name}`}  style={
          {display: 'inline-block',
          margin: '3px',
          width: '160px',
          minWidth: '160px',
          boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2)',
          transition: 'all 0.1s linear',
          marginBottom: '3px',
          borderRadius: '2%',
          backgroundColor: 'lightgrey',
          opacity: '85%'
        }
        } onMouseOver={this.cardOver} onMouseOut={this.cardOut}>


          <div id="imageDIV"   style={{
            justifyContent: 'center',
            backgroundImage: `url(${photo})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            borderRadius: '1%',
            minHeight: '200px'
          }}>
            <div style={{
                      display: 'flex', justifyContent: 'right', marginRight: '5px'}}>
           <span id={`star${this.props.product.name}`} style={{color: 'lightgrey', cursor: 'pointer', transition: '0.1s'}} onMouseOver={this.mouseover} onMouseOut={this.mouseout} onClick={this.onActionClick}>&#9733;   </span>
           </div>
          <div
          style={{
            display: 'flex',
            minHeight: '180px'
          }}onClick={this.onProdClick}></div>

          </div>

          <div onClick={this.onProdClick} className="container" style={{
            textAlign: 'left',
            backgroundColor: 'lightgrey',
            marginLeft: '2px'
          }}>
          <div style={{color: 'dimgray', cursor: 'default', fontFamily: 'Georgia, serif', fontSize: '70%'}}className="category">{this.props.product.category}</div>
          <div style={{color: 'dimgray', cursor: 'default', fontFamily: 'Georgia, serif', fontSize: '70%'}}className="prodName" id={this.props.product.name}>{this.props.product.name}</div>
          {price}
          <div  style={{marginBottom:'5px'}} className="rating">{stars ? stars.map(star => star) : null}</div>
          </div>
        </div>
        {this.state.comparisonState ? <ComparisonModal changeCompState={this.onActionClick} products={this.props}/> : null}
        </>
      )
    }

  }


}

export default ProductCard;