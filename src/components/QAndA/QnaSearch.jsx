import React, {useState} from 'react';

const QnaSearch = (props) => {

  const [enteredSearchText, setSearchText] = useState("");

  const searchHandler = (event) => {
    let value = event.target.value;
    setSearchText(value);
    props.onSearchHandler(value);
  }

  return(
    <>
      <input id="qnaSearchEntry"  placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS…" onChange={(event) =>searchHandler(event)} ></input>
    </>
  )
}

export default QnaSearch;