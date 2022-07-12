import React, {useState, useEffect} from 'react';
import QnaList from './QnaList.jsx';
import QnaSearch from './QnaSearch.jsx';
import AddQuestion from './FORM/AddQuestion.jsx';
const axios = require('axios');
const config = require('../../../config.js');


class QAndA extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      qnaData: [],
      searchText: "",
      showItem:2
    }
    //inside constructor
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.filterItems = this.filterItems.bind(this);
    this.questionLength = this.questionLength.bind(this);
    this.sortQuestions = this.sortQuestions.bind(this);
    this.loadMoreHandler = this.loadMoreHandler.bind(this);
  }

  componentDidMount() {
    let options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions`,
      headers: {
        'User-Agent': 'request',
         "params": {product_id: "40348"}
         //uncomment this line 28 for group test
        // "params": {product_id:this.props.productId}
      }
    };
    axios.defaults.headers.common['Authorization'] = config.TOKEN;
    axios.get(options.url, options.headers)
    .then( res => {
      //console.log("this is from res",res.data.results)
      this.setState({
        qnaData:res.data.results
      })
      //console.log("this is after setstate", this.state.qnaData)
    })
  }

  //update user input searchtext
  onSearchHandler(searchText) {
    //console.log(searchText);
    this.setState({
      searchText: searchText
    })
  }

  loadMoreHandler(event) {
    event.preventDefault();
    this.setState({
      showItem: this.state.showItem + 2
    })
  }

  //bc compoenent setstate with fetched data
  //if use filter function setstate with updated value will be over-written
  filterItems(text, items) {
    if (text.length > 2) {
      return items.filter( (question) => {
        return question.question_body.toLowerCase().includes(text.toLowerCase());
      })
    } else {
      return items;
    }
  }

  //check questions length to render more questions button
  questionLength(questions) {
    if (questions.length >= 2 && this.state.showItem < questions.length) {
      return true;
    } else {
      return false;
    }
  }

  sortQuestions(questions) {
    return questions.sort( (a, b) => {
      return b["question_helpfulness"] - a["question_helpfulness"];
    })
  }

  render () {
    return(<div className="qna-section" style={{color:"blue", border: "solid 2px"}}>
       <h3>QUESTIONS & ANSWERS </h3>
       <div className="qnaSearch" >
        <QnaSearch onSearchHandler={this.onSearchHandler} />
       </div>
      <QnaList qnaData={this.filterItems(this.state.searchText,this.sortQuestions(this.state.qnaData))} qnaLength={this.state.showItem} />
      <div className="qna-function">
        {this.questionLength(this.state.qnaData) && <button style={{"fontWeight": "bold"}} onClick={event => this.loadMoreHandler(event)}>MORE ANSWERED QUESTIONS</button>}<AddQuestion/>
      </div>
    </div>)
  }

}

export default QAndA;