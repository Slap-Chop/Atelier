import React from 'react';
import ReviewsListEntry from './ReviewsListEntry.jsx';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      more: true,
      reviewsToShow: 2,
      expanded: false
    }

    this.showMoreReviews = this.showMoreReviews.bind(this);
  }

  showMoreReviews() {
    // append to current reviews list
    // add additional 2 more reviews
    // let currentMoreVal = this.state.more;
    // this.setState({more: currentMoreVal+1});

    let reviewsCount = this.state.reviewsToShow;
    reviewsCount < this.props.reviews.length ? this.setState({
      reviewsToShow: (reviewsCount + 2)
    }) : this.setState({more: false});

    console.log('NEW COUNT', this.state.reviewsToShow)
  }

  // componentDidMount() {
  //   this.setState;
  // }

  render() {
    console.log('Reviews List props reviews', this.props.reviews)
    return (
      <>
      <label>Sort By</label>
      <select>
        <option value="test">TEST</option>
      </select>
      <label>Sort By</label>
      <select>
        <option value="test2">TEST2</option>
      </select>
      <div>
        <ul>
          {this.props.reviews.slice(0, this.state.reviewsToShow).map((review, i) => <ReviewsListEntry review={review} key={i}/>)}
        </ul>
      </div>
      {/* {this.props.reviews.length > 2 ? (this.props.reviews).map((review) =>
        <ReviewsListEntry review={review}/>) : null} */}
      {/* {this.props.reviews.length > 2 ?
      <>
        <ReviewsListEntry review={this.props.reviews[0]}/>
        <ReviewsListEntry review={this.props.reviews[1]}/>
      </> : null}

      {this.state.more > 0 && this.state.more < 2 ?
      <>
        <ReviewsListEntry review={this.props.reviews[this.state.more+1]}/>
        <ReviewsListEntry review={this.props.reviews[this.state.more+2]}/>
      </> : null} */}

      {this.state.more ? <button onClick={() => this.showMoreReviews()}>More Reviews</button> : <button disabled={true}>No more reviews</button>}
      </>
    )
  }

}

export default ReviewsList;

