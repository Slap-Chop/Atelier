import React, {useState} from 'react';


const ReportToggle = (props) => {

  const [status, setStatus] = useState(props.reportStatus);

  let currentReport = status === true ? "Reported" : "Report";

  const clickHandler = () => {
    setStatus(!status)
    //pass update to parents
    alert("fix report and patch repot status")
  }

  return (
    <React.Fragment>
       <span style={{"textDecoration": "underline"}} onClick={clickHandler} >{currentReport}</span>
    </React.Fragment>
  )
}

export default ReportToggle;