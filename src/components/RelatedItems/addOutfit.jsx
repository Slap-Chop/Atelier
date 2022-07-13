import React from 'react';

const addOutfit = (props) => {




  return (
    <>

    <div  onClick={props.onAdd}className="card" style={
      {display: 'inline-block',
      border: '1px solid blue',
      margin: '2%',
      width: '160px',
      height: '195px',
    }
    }>
      <div  style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      {/* <img  src={this.props.product.default.photos[0].url} style={{height: '100px'}} alt="Image N/A"/> */}
      <i className="fa-9x fa-plus" aria-hidden="true"></i>

      </div>

      <div className="container" style={{
        textAlign: 'center'
      }}>
      <div className="addText">Add to Outfit</div>
      {/* <div className="name">{this.props.product.name}</div>
      {price}
      <div className="rating">star rating to go here</div> */}
      </div>

    </div>

    </>

  )
}

export default addOutfit;