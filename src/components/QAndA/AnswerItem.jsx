import React from 'react';

const AnswerItem = (props) => {




  return (
    <div className="answerItem">
      <div>{props.data.body}</div>
    </div>
  )
}

export default AnswerItem;