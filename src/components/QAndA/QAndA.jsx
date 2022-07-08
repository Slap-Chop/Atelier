import React, {useState, useEffect} from 'react';
import QnaList from './qnaList.jsx';
//import './QAndA.css';

const {getQnaData} = require('./parse.jsx');

const QAndA = (props) => {

  const [fetchData, setFetchData] = useState([]);



  const getData = (event) => {
    console.log('clicked')
    event.preventDefault();
    getQnaData(props.productId)
    .then( res => {
      console.log("this is from res",res.data.results)
      setFetchData((prevData) => {
        return [...res.data.results, ...prevData]
      })
      //setFetchData(res.data.results );
      console.log("this is after setstate", fetchData)

    })

  }


    return(<div  onClick={getData}>
      Q And A!
      <QnaList qnaData={fetchData} />
      <div>{JSON.stringify(fetchData)}</div>
    </div>


    )
}



export default QAndA;