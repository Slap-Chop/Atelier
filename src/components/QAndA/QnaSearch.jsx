import React, {useState} from 'react';

const QnaSearch = (props) => {

  const [enteredSearchText, setSearchText] = useState("");

  const searchHandler = (event) => {
    let value = event.target.value;
    setSearchText(value);
    props.onSearchHandler(value);
  }

  return(
    <div className="qnaSearch">
      <input id="qnaSearchEntry" placeholder="Have a question? Search for answers…" onChange={(event) =>searchHandler(event)} ></input>
    </div>
  )
}

export default QnaSearch;