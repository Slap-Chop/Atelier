import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');
const config = require('../../../../config.js');

const AddQuestion = (props) => {

  const [productName, setProductName] = useState("");

  useEffect( () => {
    let options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products`,
      headers: {
        'User-Agent': 'request',
      }
    };
    axios.defaults.headers.common['Authorization'] = config.TOKEN;
    axios.get(options.url, options.headers)
    .then( res => {
      //console.log("this is from res",res.data)
        for (let item of res.data) {
          //console.log("this is the id", props.productId);
          if (item["id"] === props.productId) {
            setProductName(item["name"])
          }
        }
      })
  });

  const submitHandler = (event) => {
    alert("explore backdrop and overlay", props.productId)
  }

  const modalStyle = {
    position: "fixed",
    top: "40%",
    left: "40%",
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
    backgroundColor: "rgba(96,96,96,.8)",
    zIndex: 1000
  }

  return ReactDOM.createPortal(
    <>
    <div style={overlayStyle}>
      <form style={modalStyle} onSubmit={submitHandler}>
        <div className="form-title">
          <h2>Ask Your Question</h2>
          <h4>About the {productName}</h4>
        </div>
        <div className="form-entry">
            <div>Your Question (mandatory)</div>
            <textarea placeholder="max 1000 characters"></textarea>
            <div>What is your nickname (mandatory)</div>
            <input type="text" placeholder="Example: jackson11!"/>
        </div>

        <div className="form-button">
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