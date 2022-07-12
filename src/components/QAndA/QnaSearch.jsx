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
      <input id="qnaSearchEntry" style={{"width" :"90%"}} placeholder="Have a question? Search for answers…" onChange={(event) =>searchHandler(event)} ></input>
    </>
  )
}

export default QnaSearch;