import React, {useState} from 'react';
import AnswerList from './AnswerList.jsx';
import HelpCounter from './UI/HelpCounter.jsx';
import AddAnswer from './FORM/AddAnswer.jsx';

const QnaItem = ({data,productId}) => {

  const [addAnswer, setAddAnswer] = useState(false);

  //convert answer data into array of obj
  let answerData = Object.keys(data.answers).map(key => {
    return data.answers[key];
  })

  const formatString = (str) => {
    str = str.trim();
    return "Q: " + str[0].toUpperCase() + str.substring(1).toLowerCase();
  }



  const addAnswerHandler = (status) => {
    setAddAnswer(status)
  }

  return (
    <div className="qnaItem">
      <div className="question" >
        <span id="question-body" style={{"fontWeight": "bold"}}>{formatString(data.question_body)}</span>
        <div className="q-bar">
          <span id="question-helpCounter"><HelpCounter help={data.question_helpfulness} questionId={data.question_id}/></span> <span>{'  |  '}</span>
          <span id="add-answer" onClick={() => addAnswerHandler(true)}>Add Answer</span>
          {addAnswer && <AddAnswer q_data={data} addAnswerHandler={addAnswerHandler} productId={productId}/>}
        </div>
      </div>
      <div className="answer-list"><AnswerList answerData={answerData} reportStatus={data.reported}/></div>
    </div>
  )
}

export default QnaItem;