import React, {useState} from 'react';
import AnswerItem from './AnswerItem.jsx';

//input data is array of obj
const AnswerList = (props) => {

  const [showItem, setShowItem] = useState(2);

  //sort and show defalut answers
  const displayData = (data) => {
    let sellerAnswer = [];
    let sorted = data.slice(0).sort( (a, b) => {
      return b["helpfulness"] - a["helpfulness"];
    })
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i]["answerer_name"] === "Seller") {
        sellerAnswer.push(sorted[i]);
        sorted.splice(i, 1);
      }
    }
    return sellerAnswer.concat(sorted).slice(0, showItem);
  }

  const onClickHander = (event) => {
    event.preventDefault();
    setShowItem(showItem + 2);
    //alert("load more answer clicked")
    //should update props.answerData
  }

  return (
    <>
    <div  className="answerList">
      {displayData(props.answerData).map( (ans) => {
        return <AnswerItem key={ans.id} data={ans} reportStatus={props.reportStatus}/>
      })}
    </div>
    <button onClick={onClickHander}>LOAD MORE ANSWERS</button>
    </>
  )
}

export default AnswerList;