import React from 'react';
import AnswerItem from './AnswerItem.jsx';

const AnswerList = (props) => {

  const onClickHander = (event) => {
    event.preventDefault();
    alert("load more answer clicked")
    //should update props.answerData
  }

  return (
    <>
    <div  className="answerList">
      {props.answerData.map( (ans) => {
        return <AnswerItem key={ans.id} data={ans} reportStatus={props.reportStatus}/>
      })}
    </div>
    <button onClick={onClickHander}>LOAD MORE ANSWERS</button>
    </>
  )
}

export default AnswerList;