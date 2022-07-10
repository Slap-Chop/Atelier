import React from 'react';
import QnaItem from './qnaItem.jsx';

const QnaList = (props) => {

  return (
    <div  className="qnaList">
      {props.qnaData.map( (item) => {
        return <QnaItem data={item} key={item.question_id}/>
      })}
    </div>
  )
}

export default QnaList;