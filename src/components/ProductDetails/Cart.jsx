import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import config from '../../../config.js';

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
      skuObj: {},
      notSelected: false,
    }
    this.sizeRef = React.createRef();
  }

  componentDidUpdate() {
    // console.log(this.state.stock)
    if(this.props.currentStyle.skus !== this.state.stock) {
      this.setState({stock: this.props.currentStyle?.skus, currentSize: 'Select Size'})
      if (this.props.currentStyle?.skus?.length !== 0) {
        this.setState({stockMessage: 'Select Size', inStock: true});
      }
      if (this.props.currentStyle?.skus?.null) {
        this.setState({stockMessage: 'Out of Stock', inStock: false, currentSize: 'Select Size'})
      }
    }
  }

  handleSizeChange(event) {
    let skuId = event?.value
    let skuObj = this.state.stock[skuId] || {quantity: 0, size: 'Select Size'}
    this.setState({notSelected: false});
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
    // console.log(skuId, this.state.stock[skuId], skuObj?.size)
  }

  handleQuantChange(event) {
    // console.log(event?.target?.value)
    this.setState({quantity: event?.target?.value})
  }

  handleAddCart() {
    // console.log(this.props.currentStyle.name, this.state.quantity, this.state.currentSize)
    let productObj = {
      sku_id: this.state.sku,
      count: this.state.quantity
    };
    // console.log(productObj)
    if (this.state.currentSize === 'Select Size') {
      this.setState({notSelected: true})
      this.sizeRef.current?.focus();
    } else {
      axios.defaults.headers.common['Authorization'] = config.TOKEN;
      axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart/', productObj).then((response) => {
        console.log(`product ${this.props.currentStyle.name} added to cart with size ${this.state.currentSize}, quantity ${this.state.quantity}, sku ${this.state.sku} and response status ${response.status}`)
      })
    }
    // console.log('skus', this.props.currentStyle?.skus)

  }

  render() {
    let quantArray = [];
    let maxquant = this.state.skuObj?.quantity > 15 ? 15 : this.state.skuObj?.quantity
    for (let i = 1; i <= maxquant; i++) {
      quantArray.push(i)
    }

    let options = [{value: 'N/A', label: this.state.stockMessage}]

    if (this.state.inStock && this.state.stock) {
      let newoptions = [];
      newoptions.push({value: 'N/A', label: 'Select Size'})
      Object.entries(this.state.stock).forEach((sku, index) => {
        newoptions.push({value: sku[0], label: sku[1].size})
      })
      options = newoptions
    }

    return(
      <div className='productBorder'>
        {this.props.currentProduct?.name} > {this.props.currentStyle?.name}
      <div className='cartContainer'>
      <div className='sizeContainer'>
      {/* Size dropdown menu */}
      {this.state.notSelected && 'Please select a size'}
      {this.state.inStock &&
        <Select onChange={this.handleSizeChange.bind(this)}
      openMenuOnFocus={true}
      defaultValue={{label: 'Select Size', value: 'N/A'}}
      options={options}
      ref={this.sizeRef}
      className='sizeMenu'
      isDisabled={!this.state.inStock}/>}
      {/* check if item is in stock*/}
      {!this.state.inStock && <Select onChange={this.handleSizeChange.bind(this)}
      openMenuOnFocus={true}
      defaultValue={{label: 'Out of Stock', value: 'N/A'}}
      options={options}
      ref={this.sizeRef}
      className='sizeMenu'
      isDisabled={!this.state.inStock}/>}
        {/* <option value={'N/A'}>{this.state.stockMessage}</option> */}
      {/* map and add sizes to the dropdown */}
        {/* {this.state.stock && Object.entries(this.state.stock)?.map((sku, index) => {
        return (<option value={sku[0]} key={index}>{sku[1].size}</option>)
      })} */}


      </div>
      <div>
        {/* Quantity dropdown menu */}
        <select className='quantityMenu'
        onChange={this.handleQuantChange.bind(this)}
        disabled={this.state.currentSize === 'Select Size'}>
        {this.state.currentSize === 'Select Size' && <option>-</option>}
        {this.state.currentSize !== 'Select Size' && quantArray.map((number, index) => {
          return <option key={index} value={number}>{number}</option>
        })}
        </select>
      </div>

      </div>

      {/* Add to Cart Button */}
      {this.state.inStock && <button onClick={this.handleAddCart.bind(this)}>Add to Cart</button>}
    </div>
    )
  }


}

export default Cart;