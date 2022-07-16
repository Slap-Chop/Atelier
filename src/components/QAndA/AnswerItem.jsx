import React from 'react';
import Footer from './UI/Footer.jsx';
import HelpCounter from './UI/HelpCounter.jsx';
import ReportToggle from './UI/ReportToggle.jsx';

const AnswerItem = (props) => {

  const formatBody = (str) => {
    str = str.trim();
    return str[0].toUpperCase() + str.substring(1).toLowerCase();
  }



  return (
    <div className="answerItem">
      <div><span style={{"fontWeight": "bold"}}>A:</span>{formatBody(props.data.body)}</div>
      <div><Footer name={props.data.answerer_name} data={props.data.date}/><span> | </span>
      <HelpCounter answerId={props.data.id} help={props.data.helpfulness}/> <span> | </span> <ReportToggle reportStatus={props.reportStatus} />
      </div>
    </div>
  )
}

export default AnswerItem;