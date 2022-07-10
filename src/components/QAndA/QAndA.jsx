import React, {useState, useEffect} from 'react';
import QnaList from './QnaList.jsx';
import QnaSearch from './QnaSearch.jsx';
const axios = require('axios');
const config = require('../../../config.js');


class QAndA extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      qnaData: [],
      searchText: ""
    }
    //inside constructor
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.filterItems = this.filterItems.bind(this);
  }

  componentDidMount() {
    let options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions`,
      headers: {
        'User-Agent': 'request',
         "params": {product_id: "40347"}
         //uncomment this line 28 for group test
        // "params": {product_id:this.props.productId}
      }
    };
    axios.defaults.headers.common['Authorization'] = config.TOKEN;
    axios.get(options.url, options.headers)
    .then( res => {
      console.log("this is from res",res.data.results)
      this.setState({
        qnaData:res.data.results
      })
      console.log("this is after setstate", this.state.qnaData)
    })
  }

  //update user input searchtext
  onSearchHandler(searchText) {
    console.log(searchText);
    this.setState({
      searchText: searchText
    })
  }

  //bc compoenent setstate with fetched data
  //if use filter function setstate with updated value will be over-written
  filterItems(text, items) {
    console.log("in filteritem function", text);
    if (text.length > 3) {
      return items.filter( (question) => {
        return question.question_body.toLowerCase().includes(text.toLowerCase());
      })
    } else {
      return items;
    }
  }


  render () {
    return(<div style={{color:"blue", border: "solid 2px"}}>
       <h3>QUESTIONS & ANSWERS </h3>
       <QnaSearch onSearchHandler={this.onSearchHandler} />
      <QnaList qnaData={this.filterItems(this.state.searchText,this.state.qnaData)} />
    </div>)
  }

}



export default QAndA;