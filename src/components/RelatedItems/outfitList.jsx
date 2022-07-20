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
    var productObj = this.props.currentProduct;
    productObj.defaultStyle = this.props.defaultStyle
    this.props.onAddOutfit(this.props.currentProduct)
  }




  render() {
    if (this.props.currentOutfit.length > 0) {
      var outfitCards = this.props.currentOutfit.map((product, index) => {
        return <OutfitCard reviewsAvgScore={this.props.reviewsAvgScore} calculateStars={this.props.calculateStars} key={index} product={product} onRemove={this.props.onRemove}/>
     })
     outfitCards.unshift( <AddOutfit reviewsAvgScore={this.props.reviewsAvgScore} calculateStars={this.props.calculateStars} key={outfitCards.length + 1} currentProduct={this.props.currentProduct}onAdd={this.onAdd}/>)
    } else {
      outfitCards =  [<AddOutfit reviewsAvgScore={this.props.reviewsAvgScore} calculateStars={this.props.calculateStars} key="0" currentProduct={this.props.currentProduct}onAdd={this.onAdd}/>]
    }
    return (
      <>
      <div id="scroll" style={{
        display: 'inline-flex',
        marginLeft: '50px',
        marginRight: '50px',
        height: '100%',
        whiteSpace: 'nowrap',
        overflow: 'auto',
       }} >
        {outfitCards}
       </div>
       </>

    )
  }
}

export default OutfitList;