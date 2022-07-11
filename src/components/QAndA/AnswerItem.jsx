import React from 'react';
import Footer from './UI/Footer.jsx';
import HelpCounter from './UI/HelpCounter.jsx';

const AnswerItem = (props) => {

  const formatBody = (str) => {
    str = str.trim();
    return "A: " + str[0].toUpperCase() + str.substring(1).toLowerCase();
  }



  return (
    <div className="answerItem">
      <div>{formatBody(props.data.body)}</div>
      <div><Footer name={props.data.answerer_name} data={props.data.date}/><span> | </span>
      <HelpCounter help={props.data.helpfulness}/>
      </div>
    </div>
  )
}

export default AnswerItem;