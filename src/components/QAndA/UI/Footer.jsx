import React from 'react';

const Footer = (props) => {

  const formatDate = (date) => {
    const now = new Date("2022-05-31T00:00:00.000Z")
    const month = now.toLocaleString('en-US', { month: 'long' });
    const day = now.toLocaleString('en-US', { day: '2-digit' });
    const year = now.getFullYear();
    return month + " " + day + ", " + year;;
  }

  const formatUsername = (str) => {
    return str === "Seller" ? "" : str;
  }

  const isSeller = (str) => {
    return str === "Seller";
  }

  return (
    <React.Fragment>
     <span>by {isSeller(props.name) && <span style={{"fontWeight": "bold"}} >{props.name}</span>}
      {formatUsername(props.name)},  {formatDate(props.date)} </span>
    </React.Fragment>
  )


}

export default Footer;