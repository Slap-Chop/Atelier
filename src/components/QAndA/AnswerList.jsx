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
    <div  className="answerList" style={{maxHeight: 200, overflow: 'auto'}}>
      {displayData(props.answerData).map( (ans) => {
        let showPhoto = true;
        if (ans.photos.length === 0) {
          showPhoto = false;
        }

        return (
              <div key={ans.id}>
                <div className="answers">
                  <div style={{"fontWeight": "bold", "fontSize":"1rem"}}>A:</div> <AnswerItem  data={ans} reportStatus={props.reportStatus}/>
                </div>
                {showPhoto && <div className="photos">
                    {ans.photos.map( (item, index) => {
                      return (<img className="photo" key={index} src={item}  />)
                    })}
                </div>}
              </div> )
       })}
    </div>
    <div className="ans-button">
      {(checkAnswerLength(props.answerData) && !collapse) && <div style={{"fontWeight": "bold"}} onClick={onLoadHandler}>LOAD MORE ANSWERS</div>}
      {collapse &&  <div style={{"fontWeight": "bold"}} onClick={onCollapseHandler}>COLLAPSE ANSWERS</div>}
    </div>
    </>
  )
}

export default AnswerList;