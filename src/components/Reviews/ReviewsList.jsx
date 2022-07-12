import React from 'react';
import ReviewsListEntry from './ReviewsListEntry.jsx';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  }


  render() {
    console.log('Reviews List props reviews', this.props.reviews)
    return (
      <>
      {this.props.reviews.length > 0 ? (this.props.reviews).map((review) =>
        <ReviewsListEntry review={review}/>) : null}
      </>
    )
  }

}

export default ReviewsList;

