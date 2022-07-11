import React from 'react';
import AnswerList from './AnswerList.jsx';
import HelpCounter from './UI/HelpCounter.jsx';

const QnaItem = ({data}) => {


  //convert answer data into array of obj
  let answerData = Object.keys(data.answers).map(key => {
    return data.answers[key];
  })

  const formatString = (str) => {
    str = str.trim();
    return "Q: " + str[0].toUpperCase() + str.substring(1).toLowerCase();
  }

  const qHelpHandler = (event) => {
    console.log("inside quaItem.jsx", num);
  }

  return (
    <div className="qnaItem">
      <div>{formatString(data.question_body)}
      <HelpCounter help={data.question_helpfulness} onHelpHandler={qHelpHandler}/> <span>|</span></div>
      <div><AnswerList answerData={answerData} /></div>
    </div>
  )
}

export default QnaItem;