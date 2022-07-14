import React, {useState} from 'react';
import AnswerItem from './AnswerItem.jsx';

//input data is array of obj
const AnswerList = (props) => {

  const [showItem, setShowItem] = useState(2);
  const [collapse, setCollapse] = useState(false);

  //sort and show defalut answers
  const displayData = (data) => {
    let sellerAnswer = [];
    let sorted = data.slice(0).sort( (a, b) => {
      return b["helpfulness"] - a["helpfulness"];
    })
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i]["answerer_name"] === "Seller" || sorted[i]["answerer_name"] === "seller" ) {
        sellerAnswer.push(sorted[i]);
        sorted.splice(i, 1);
      }
    }
    return sellerAnswer.concat(sorted).slice(0, showItem);
  }

  const onLoadHandler = (event) => {
    event.preventDefault();
    setShowItem(props.answerData.length);
    //alert("load more answer clicked")
    //should update props.answerData
    setCollapse(true);
  }

  const onCollapseHandler = (event) => {
    event.preventDefault();
    setShowItem(2);
    setCollapse(false);
  }

  //check answer length, if > 2 show load more answers
  const checkAnswerLength = (answers) => {
    return answers.length > 2;
  }

  return (
    <>
    <div  className="answerList" style={{maxHeight: 150, overflow: 'auto'}}>
      {displayData(props.answerData).map( (ans) => {
        return <AnswerItem key={ans.id} data={ans} reportStatus={props.reportStatus}/>
      })}
    </div>
    {(checkAnswerLength(props.answerData) && !collapse) && <button style={{"fontWeight": "bold"}} onClick={onLoadHandler}>LOAD MORE ANSWERS</button>}
    {collapse &&  <button style={{"fontWeight": "bold"}} onClick={onCollapseHandler}>COLLAPSE ANSWERS</button>}
    </>
  )
}

export default AnswerList;