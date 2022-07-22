import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');
const config = require('../../../../config.js');

const AddQuestion = (props) => {

  const [errorStatus, setErrorStatus] = useState(false);
  const [errorField, setErrorField] = useState("");
  const [productName, setProductName] = useState("");
  const [Name, setName] = useState("");
  const [Question, setQuestion] = useState("");
  const [Email, setEmail] = useState("");

  useEffect( () => {
    let options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${props.productId}`,
      headers: {
        'User-Agent': 'request',
      }
    };
    axios.defaults.headers.common['Authorization'] = config.TOKEN;
    axios.get(options.url, options.headers)
    .then( res => {
      console.log("this is the id",props.productId, res.data)
      setProductName(res.data["name"])
      })
  },[props.productId]);

  const questionChangeHandler = (event) => {
    setQuestion(event.target.value);
  }

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   Email: event.target.value
    // })
  }

  const modalStyle = {
    position: "fixed",
    top: "30%",
    left: "30%",
    backgroundColor: "#FFF",
    padding: "50px",
    zIndex: 1000,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }

  const errorStyle = {
    color: "white",
    position: "fixed",
    top: "35%",
    left: "35%",
    backgroundColor: "rgba(16,40,139,.95)",
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

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 5
  }

  const buttonStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20
  }

  const submitHandler = (event) => {
    //alert("explore backdrop and overlay", props.productId)
    event.preventDefault();
    if (Question === "") {
      setErrorStatus(true);
      setErrorField( "Question");
    } else if (Name === "") {
      setErrorStatus(true);
      setErrorField( "Name");
    } else if (Email === "") {
      setErrorStatus(true);
      setErrorField( "Email");
    } else {
      const userInput = {
        body: Question,
        name: Name,
        email: Email,
        product_id: props.productId
      }
      let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions`;
      axios.defaults.headers.common['Authorization'] = config.TOKEN;
      axios.post(url, userInput)
      .then( (res) => {
        console.log("form is submited", res)
      })
      .catch( err => {
        console.log("error from submit form", err)
      })
      props.addQuestionHandler(false)
    }
  }

  //render under q-portal root
  return ReactDOM.createPortal(
    <>
    <div style={overlayStyle}>
      <form style={modalStyle} onSubmit={submitHandler}>
        <div className="form-title">
          <h4>Ask Your Question</h4>
          <h5>About the {productName}</h5>
        </div>
        <div className="form-entry" style={formStyle}>
            <div>Your Question (mandatory)</div>
            <textarea style={{"marginBottom":15, "height":90}} value={Question} onChange={questionChangeHandler} placeholder="max 1000 characters"></textarea>
            <div>What is your nickname (mandatory)</div>
            <input  type="text" value={Name} onChange={nameChangeHandler} placeholder="Example: jackson11!"/>
            <div style={{"marginBottom":15}}>For privacy reasons, do not use your full name or email address</div>
            <div>Your email (mandatory)</div>
            <input type="email" value={Email} onChange={emailChangeHandler} placeholder="Example: jack@email.com"/>
            <div>For authentication reasons, you will not be emailed</div>
        </div>

        <div className="form-button" style={buttonStyle}>
          <button type="submit" >submit</button>
          <button type="button" onClick={() =>props.addQuestionHandler(false)} >cancel</button>
        </div>
          {errorStatus &&
            <div className="error" style={errorStyle}>
            <div>You must enter following  </div>
            <ul>
              <li>{errorField}</li>
            </ul>
            <button onClick={() => {setErrorStatus(false)}}>Close</button>
            </div>
          }
      </form>
    </div>
    </>,
    document.getElementById("q-portal")
  )
}

export default AddQuestion;