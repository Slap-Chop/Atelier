import React from 'react';

import StyleComponent from './StyleComponent.jsx';

const StyleSelector = (props) => {

    let salePrice = props.currentStyle?.sale_price;
    let defaultPrice = props.currentStyle?.original_price;
    let priceStyle, styleError;

    // breaking up the styles into groups of 4
    const rows = [...Array(Math.ceil(props.styles.length / 4))];
    const thumbailRows = rows.map((row, index) => (props.styles.slice(index*4, index*4 + 4)))

    if (salePrice) {
      priceStyle = {color: 'red', textDecorationLine: 'line-through'};
      salePrice = `$${salePrice}`
    }
    if (props.styles.length === 0) {
      styleError = 'Something went wrong! Click this message to reload.'
    }


    return(
      <div className='productBorder'>
        {/* price and sale price */}
        <div className='flex'>
          <p style={priceStyle}>${defaultPrice}</p>
          <p className='salePrice'>{salePrice}</p>
        </div>

          <div>Style > {props.currentStyle?.name}</div>
          {/* style thumbnails */}

          {thumbailRows.map((row, index) => (
            <div className='flex' key={index}>{row.map((style, index) => {
            //highlight the style if it is selected
              if (props.currentStyle === style) {
                return (<StyleComponent style={style}
                click={props.click}
                key={index}
                current={'65px'}
                weight={600}/>)
              } else {
                return (<StyleComponent click={props.click}
                  key={index}
                  style={style}/>)
        }
      })}</div>
    ))}


    </div>
    )
  }




export default StyleSelector;