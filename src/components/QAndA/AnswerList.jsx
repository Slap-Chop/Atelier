import React from 'react';
import AnswerItem from './AnswerItem.jsx';

const AnswerList = (props) => {

  return (
    <div  className="answerList">
      {props.answerData.map( (ans) => {
        return <AnswerItem key={ans.id} data={ans}/>
      })}
    </div>
  )
}

export default AnswerList;