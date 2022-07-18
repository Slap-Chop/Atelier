import React, {useState, useEffect} from 'react';
import QnaList from './QnaList.jsx';
import QnaSearch from './QnaSearch.jsx';
import AddQuestion from './FORM/AddQuestion.jsx';
import './STYLE/qna.css';
const axios = require('axios');
const config = require('../../../config.js');


class QAndA extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      qnaData: [],
      searchText: "",
      showItem:2,
      addQuestion: false,
      productId: 0
    }
    //inside constructor
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.filterItems = this.filterItems.bind(this);
    this.questionLength = this.questionLength.bind(this);
    this.sortQuestions = this.sortQuestions.bind(this);
    this.loadMoreHandler = this.loadMoreHandler.bind(this);
    this.addFormHandler = this.addQuestionHandler.bind(this);
  }

  componentDidMount() {
    let options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions`,
      headers: {
        'User-Agent': 'request',
         //"params": {product_id: "40348"}
         //uncomment this line 28 for group test
         "params": {product_id:this.state.productId}
      }
    };
    axios.defaults.headers.common['Authorization'] = config.TOKEN;
    axios.get(options.url, options.headers)
    .then( res => {
      this.setState({
        qnaData:res.data.results
      })
    })
  }

  componentDidUpdate() {
    if(this.state.productId !== this.props.productId) {
      this.setState({
        productId: this.props.productId
      })

      let options = {
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions`,
        headers: {
          'User-Agent': 'request',
           "params": {product_id:this.props.productId}
        }
      };
      axios.defaults.headers.common['Authorization'] = config.TOKEN;
      axios.get(options.url, options.headers)
      .then( res => {
        this.setState({
          qnaData:res.data.results
        })
      })

    }
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

  addQuestionHandler = (status) => {
    //console.log('clicked add', status)
    this.setState({
      addQuestion: status
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
    return(
    <div className="qna-section" >
        <div id="header">QUESTIONS & ANSWERS </div>
      <div className="qnaSearch" >
        <QnaSearch onSearchHandler={this.onSearchHandler} />
      </div>
        <QnaList qnaData={this.filterItems(this.state.searchText,this.sortQuestions(this.state.qnaData))} qnaLength={this.state.showItem} productId={this.state.productId}/>
      <div className="qna-function">
          {this.questionLength(this.state.qnaData) && <button style={{"fontWeight": "bold"}} onClick={event => this.loadMoreHandler(event)}>MORE ANSWERED QUESTIONS</button>}
          <button onClick={() => this.addQuestionHandler(true)}>Add Question +</button>
          {this.state.addQuestion && <AddQuestion addQuestion={this.state.addQuestion} addQuestionHandler={this.addQuestionHandler} productId={this.props.productId}/>}
      </div>
    </div>
    )
  }

}

export default QAndA;