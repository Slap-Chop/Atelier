import React from 'react';
import AnswerList from './AnswerList.jsx';

const QnaItem = ({data}) => {


  //convert answer data into array of obj
  let answerData = Object.keys(data.answers).map(key => {
    return data.answers[key];
  })

  const formatString = (str) => {
    str = str.trim();
    return "Q: " + str[0].toUpperCase() + str.substring(1).toLowerCase();
  }

  return (
    <div className="qnaItem">
      {/* <div>something</div> */}
      <div>{formatString(data.question_body)}</div>
      <div><AnswerList answerData={answerData} /></div>
    </div>
  )
}

export default QnaItem;