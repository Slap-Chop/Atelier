import React, {useState} from 'react';
import logo from "./UI/Search.png";

const QnaSearch = (props) => {

  const [enteredSearchText, setSearchText] = useState("");

  const searchHandler = (event) => {
    let value = event.target.value;
    setSearchText(value);
    props.onSearchHandler(value);
  }

  return(
    <>
      <input id="qnaSearchEntry" type="search" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS…" onChange={(event) =>searchHandler(event)} ></input>
      <button id="search-button">
        <img id="s-img" src={logo}></img>
      </button>
    </>
  )
}

export default QnaSearch;