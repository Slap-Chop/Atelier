import React from 'react';

import StyleComponent from './StyleComponent.jsx';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    let salePrice = this.props.currentStyle?.sale_price;
    let defaultPrice = this.props.currentStyle?.original_price;
    let priceStyle, styleError;

    // breaking up the styles into groups of 4
    const rows = [...Array(Math.ceil(this.props.styles.length / 4))];
    const thumbailRows = rows.map((row, index) => (this.props.styles.slice(index*4, index*4 + 4)))

    if (salePrice) {
      priceStyle = {color: 'red', textDecorationLine: 'line-through'};
      salePrice = `$${salePrice}`
    }
    if (this.props.styles.length === 0) {
      styleError = 'Something went wrong! Click this message to reload.'
    }


    return(
      <div style={{border: '1px solid green'}}>
        {/* price and sale price */}
        <div style={{display:'flex'}}>
          <p style={priceStyle}>${defaultPrice}</p>
          <p style={{paddingLeft: '10px'}}>{salePrice}</p>
        </div>

          <div>Style > {this.props.currentStyle?.name}</div>
          {/* style thumbnails */}

          {thumbailRows.map((row, index) => (
            <div style={{display:'flex'}} key={index}>{row.map((style, index) => {
            //highlight the style if it is selected
              if (this.state.currentStyle === style) {
                return (<StyleComponent style={style}
                click={this.props.click}
                key={index}
                weight={600}/>)
              } else {
                return (<StyleComponent click={this.props.click}
                  key={index}
                  style={style}/>)
        }
      })}</div>
    ))}


    </div>
    )
  }

}




export default StyleSelector;