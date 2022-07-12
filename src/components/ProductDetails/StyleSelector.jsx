import React from 'react';

import StyleComponent from './StyleComponent.jsx';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [],
      currentStyle: {},
    }
  }

  // componentDidMount() {
  //   axios.defaults.headers.common['Authorization'] = config.TOKEN;
  //   axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${this.props.id}/styles`).then((data) => {
  //     // console.log('style data in Style selector',data.data.results[0])
  //     this.setState({styles: data.data.results, currentStyle:data.data.results[0]})
  //   })
  // }

  //dont want to call getting styles twice, but struggling to pass down props properly.
  //either look into memoization or derived state. For now using receive props, or the extra api call is the most consistent.

  UNSAFE_componentWillReceiveProps() {
    this.setState({currentStyle: this.props.currentStyle})
    this.setState({styles: this.props.styles})
    // console.log('styleselector props', this.props)
  }

  handleStyleChange(style) {
    this.setState({currentStyle: style});
  }

  handleReload() {
    this.setState({currentStyle: this.props.currentStyle})
    this.setState({styles: this.props.styles})
  }

  render() {
    let salePrice = this.state.currentStyle.sale_price;
    let defaultPrice = this.state.currentStyle.original_price;
    let priceStyle, styleError;

    // breaking up the styles into groups of 4
    const rows = [...Array(Math.ceil(this.props.styles.length / 4))];
    const thumbailRows = rows.map((row, index) => (this.props.styles.slice(index*4, index*4 + 4)))

    if (salePrice) {
      priceStyle = {color: "red", textDecorationLine: 'line-through'};
      salePrice = `$${salePrice}`
    }
    if (this.state.styles.length === 0) {
      styleError = "Something went wrong! Click this message to reload."
    }


    return(
      <div style={{border: '1px solid green'}}>
        {/* price and sale price */}
        <div style={{display:'flex'}}>
          <p style={priceStyle}>${defaultPrice}</p>
          <p>{salePrice}</p>
        </div>

          <div>Style > {this.state.currentStyle?.name}</div>
          {/* style thumbnails */}
          <div onClick={this.handleReload.bind(this)}>{styleError}</div>

          {thumbailRows.map((row, index) => (
            <div style={{display:'flex'}} key={index}>{row.map((style, index) => {
            //highlight the style if it is selected
              if (this.state.currentStyle === style) {
                return (<StyleComponent style={style}
                click={this.handleStyleChange.bind(this)}
                key={index}
                weight={600}/>)
              } else {
                return (<StyleComponent click={this.handleStyleChange.bind(this)}
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