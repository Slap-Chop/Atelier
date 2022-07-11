import React from 'react';

//take helpfull ness and return Helpful? Yes (7)
const HelpCounter = (props) => {

  // const clickHandler = (event) => {
  //   //event.preventDefault()
  //   alert("in helpcounter")
  //   props.helpHandler()
  // //   //shoud do axios patch and update helpful counter for 1
  // //   //track user with cookies, each user can only vote one
  // }

  const formatHelp = (num) => {
    return "(" + num.toString() + ")";
  }

  return(
    <React.Fragment>
      <span>Helpful? <span style={{"textDecoration": "underline"}}>Yes </span>{formatHelp(props.help)}</span>
    </React.Fragment>
  )
}

export default HelpCounter;