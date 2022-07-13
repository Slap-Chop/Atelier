import React from 'react';
import ProductCard from './productCard.jsx';
import AddOutfit from './addOutfit.jsx';
import OutfitCard from './outfitCard.jsx';

class OutfitList extends React.Component {
  constructor(props) {
    super(props)
    this.onAdd = this.onAdd.bind(this);
  }

  onAdd(e) {
    e.preventDefault();
    this.props.onAddOutfit(this.props.currentProduct)
  }

  render() {
    return (
      <>
      <div id="scroll" style={{
        width: '40%',
        height: '100%',
        border: '1px solid red',
        whiteSpace: 'nowrap',
        overflow: 'auto',
        alignItems: 'center'
       }}
       >
        <AddOutfit currentProduct={this.props.currentProduct}onAdd={this.onAdd}/>

        {this.props.currentOutfit.map((product, index) => {
          return <OutfitCard key={index} product={product}/>
       })}

        {/* <div style={{position: 'relative', float: 'right', bottom: '100px'}}>
          <FontAwesomeIcon icon={faArrowTurnRight} /> */}
         {/* </div> */}
       </div>
       </>

    )
  }
}

export default OutfitList;