import React, {useState} from 'react';

const AddAnswer = (props) => {

  const clickHandler = (event) => {
    alert("explore backdrop and overlay")
  }

  return (
    <>
      <span onClick={clickHandler} style={{"textDecoration": "underline"}}>Add Answer</span>
    </>
  )
}

export default AddAnswer;