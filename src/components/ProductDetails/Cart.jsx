import React from 'react';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSize: 'Select Size',
      stock: {},
      inStock: false,
      stockMessage: 'Out of Stock',
      quantity: 0,
      skuId: 0,
      skuObj: {}
    }
    this.sizeRef = React.createRef();
  }

  componentDidUpdate() {
    // console.log(this.state.stock)
    if(this.props.currentStyle.skus !== this.state.stock) {
      this.setState({stock: this.props.currentStyle?.skus})
      if (this.props.currentStyle.skus?.length !== 0) {
        this.setState({stockMessage: 'Select Size', inStock: true});
      } else {
        this.setState({stockMessage: 'Out of Stock', inStock: false})
      }
    }
  }

  handleSizeChange(event) {
    let skuId = event?.target?.value
    let skuObj = this.state.stock[skuId]
    // setting state to have the select sku information
    if (skuId === 'N/A') {
      this.setState({sku: 0,
      skuObj: {},
      currentSize: 'Select Size',
      quantity: 0,
      })
    } else {
      this.setState({sku: skuId,
        skuObj: skuObj,
        currentSize: skuObj?.size,
        quantity: this.state.quantity > skuObj.quantity ? 1 : this.state.quantity ? this.state.quantity : 1
      })
    }
    console.log(skuId, this.state.stock[skuId])
  }

  handleQuantChange(event) {
    console.log(event?.target?.value)
    this.setState({quantity: event?.target?.value})
  }

  handleAddCart() {
    console.log(this.props.currentStyle.name, this.state.quantity, this.state.currentSize)
    if (this.state.currentSize === 'Select Size') {
      this.sizeRef.current?.focus();
    }
  }

  render() {
    let quantArray = [];
    let maxquant = this.state.skuObj?.quantity > 15 ? 15 : this.state.skuObj?.quantity
    for (let i = 1; i <= maxquant; i++) {
      quantArray.push(i)
    }


    return(
      <div style={{border: '1px solid yellow'}}>Cart placeholder {this.props.currentStyle?.name}
      <div>
      {/* Size dropdown menu */}
      <select onChange={this.handleSizeChange.bind(this)}
      ref={this.sizeRef}
      //look into material UI or something to open, instead of focus
      // onFocus={(e) =>(e.target.size='1')}
      // onBlur={(e) =>(e.target.size='0')}
      style={{width: '200px'}}
      disabled={!this.state.inStock}>
      {/* check if item is in stock*/}
        <option value={'N/A'}>{this.state.stockMessage}</option>
      {/* map and add sizes to the dropdown */}
        {this.state.stock && Object.entries(this.state.stock)?.map((sku, index) => {
          // console.log(sku)
        return (<option value={sku[0]} key={index}>{sku[1].size}</option>)
      })}
      </select>

      {/* Quantity dropdown menu */}
      <select style={{width: '40px'}}
      onChange={this.handleQuantChange.bind(this)}
      disabled={this.state.currentSize === 'Select Size'}>
        {Object.keys(this.state.skuObj).length === 0 && <option>-</option>}
        {quantArray.map((number, index) => {
          return <option key={index} value={number}>{number}</option>
        })}
      </select>
      </div>
      {/* Add to Cart Button */}
      {this.state.inStock && <button onClick={this.handleAddCart.bind(this)}>Add to Cart</button>}
    </div>
    )
  }


}

export default Cart;