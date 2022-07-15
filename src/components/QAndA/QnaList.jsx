import React from 'react';
import QnaItem from './QnaItem.jsx';

const QnaList = (props) => {

  const qnaData = props.qnaData.slice(0, props.qnaLength);

  return (
    <div  className="qnaList" style={{maxHeight: 300, overflow: 'auto'}}>
      {qnaData.map( (item) => {
        return <QnaItem data={item} key={item.question_id} productId={props.productId}/>
      })}
    </div>
  )
}

export default QnaList;