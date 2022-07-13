import React, {useState} from 'react';
import ReactDOM from 'react-dom';
const AddQuestion = (props) => {

  const submitHandler = (event) => {
    alert("explore backdrop and overlay")
  }

const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000
}

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom:0,
  backgroundColor: "rgba(0,0,0,.7)",
  zIndex: 1000
}

  return ReactDOM.createPortal(
    <>
    <div style={overlayStyle}>
      <form style={modalStyle} onSubmit={submitHandler}>
        <div>show something</div>
        <input placeholder="enter something!"></input><label>User enter</label>
        <div>
          <button type="submit" >submit</button>
          <button type="button" onClick={() =>props.addQuestionHandler(false)} >cancel</button>
        </div>
      </form>
    </div>
    </>,
    document.getElementById("q-portal")
  )
}

export default AddQuestion;