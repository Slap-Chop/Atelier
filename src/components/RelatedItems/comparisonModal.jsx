import React from 'react';
import ReactDOM from 'react-dom';

var ComparisonModal = (props) => {
  var curID = props.products.currentProduct.id;
  var relID = props.products.product.id;
  var currentFeatures;
  var relatedFeatures;
  var allFeatures;
  if (props.products.currentProduct.features) {
    currentFeatures = props.products.currentProduct.features.map((feature) => {
      feature.id = props.products.currentProduct.id;
      return feature;
    })

  }
    if (props.products.product.features) {
      relatedFeatures = props.products.product.features.map((feature) => {
        feature.id = props.products.product.id;
        return feature;
      })
    }


  if (currentFeatures && relatedFeatures) {
    allFeatures = relatedFeatures.concat(currentFeatures)
  } else if(currentFeatures) {
    allFeatures = currentFeatures;
  } else {
    allFeatures = relatedFeatures;
  }

  var featuresObj = {};
  for (let i = 0; i < allFeatures.length; i++) {
    if (featuresObj[allFeatures[i].feature] === undefined) {
      featuresObj[allFeatures[i].feature] = {[allFeatures[i].id]: allFeatures[i].value}
    } else {
      if (featuresObj[allFeatures[i].feature]) {
        featuresObj[allFeatures[i].feature][allFeatures[i].id] = allFeatures[i].value
      }
    }

    }



  const modalStyle = {
    position: "fixed",
    top: "30%",
    left: "30%",
    backgroundColor: "#FFF",
    padding: "50px",
    zIndex: 1000,
    display: 'inline-flex'
  }

  const overlayStyle = {
    display: 'flex',
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom:0,
    backgroundColor: "rgba(96,96,96,.8)",
    zIndex: 1000
  }

  const textstyle = {
    textAlign: 'center',
    padding: '20px',
    paddingLeft: '40px',
    paddingRight: '40px',
    border: '1px solid black'
  }

  const noFeatStyle = {
    textAlign: 'center',
    color: 'white',
    padding: '20px',
    paddingLeft: '40px',
    paddingRight: '40px',
    border: '1px solid black'
  }

  const innerStyle = {
    textAlign: 'center',
    padding: '20px',
    paddingLeft: '40px',
    paddingRight: '40px',
    border: '1px solid black',
    borderLeft: '0px',
    borderRight: '0px'

  }

  const containerStyle = {
    marginTop: '30px',
    marginBottom: '30px',
    border: '1px solid black'

  }

  return ReactDOM.createPortal(
    <>
    <div onClick={props.changeCompState}style={overlayStyle}>
      <div style={modalStyle}>
        <div style={containerStyle}>
          <div className="comparison" style={textstyle}>{props.products.currentProduct.name}</div>
          {Object.keys(featuresObj).map((feature, i) => {
            if (featuresObj[feature][curID]) {
              return <div style={textstyle} key={i}>{featuresObj[feature][curID]}</div>
            } else {
              return <div style={noFeatStyle} key={i}>n/a</div>
            }
          })}
        </div>
        <div style={containerStyle}>
         <div className="features"style={innerStyle} >FEATURES</div>
          {Object.keys(featuresObj).map((feature, i) => {
          return <div style={innerStyle}key={i}>{feature}
          </div>
          })}
        </div>
        <div style={containerStyle}>
          <div style={textstyle}>{props.products.product.name}</div>
          {Object.keys(featuresObj).map((feature, i) => {
            if (featuresObj[feature][relID]) {
              return <div style={textstyle} key={i}>{featuresObj[feature][relID]}</div>
            } else {
              return <div style={noFeatStyle} key={i}>n/a</div>
            }
          })}
        </div>
      </div>
    </div>
    </>,
    document.getElementById("comparison-portal")
  )
}

export default ComparisonModal;