import React, {useState} from 'react';

const AddQuestion = (props) => {

  const clickHandler = (event) => {
    alert("explore backdrop and overlay")
  }

  return (
    <>
      <button onClick={clickHandler} >Add Question</button>
    </>
  )
}

export default AddQuestion;