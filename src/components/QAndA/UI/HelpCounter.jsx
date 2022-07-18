import React, {useState} from 'react';

//take helpfull ness and return Helpful? Yes (7)
const HelpCounter = (props) => {

  const [helpness, setHelpness] = useState(props.help);
  const [clicked, setClicked] = useState(false);

  const clickHandler = (event) => {
    if (!clicked) {
      setHelpness(helpness + 1)
      setClicked(true)
      if (props.questionId) {
        alert("post question help")
      }
      if (props.answerId) {
        alert("post answer help")
      }
    }
    return null;
  }

  const formatHelp = (num) => {
    return "(" + num.toString() + ")";
  }

  return(
    <React.Fragment>
      <span onClick={(event) => {clickHandler(event)}}>Helpful? <span style={{"textDecoration": "underline"}}>Yes </span>{formatHelp(helpness)}</span>
    </React.Fragment>
  )
}

export default HelpCounter;