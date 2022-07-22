import React from 'react';

class ScrollLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollLeft: 0

    }
  }

  componentDidMount() {
    var mainWidth = document.getElementById('relatedMain').clientWidth;
    var smallWidth = document.getElementById('related-list').clientWidth;
    console.log(document.getElementById('scroll-related').scrollLeft);
    console.log(document.getElementById('related-list').scrollWidth, document.getElementById('relatedMain').clientWidth)
    var width = mainWidth - smallWidth;
    var listLength = this.props.products.length;
    var listWidth = listLength * 170;

    this.setState({ scrollLeft: this.props.scrollLeft })
    if (listWidth > mainWidth) {
      this.setState({ arrowView: true })
    } else {
      this.setState({ arrowView: false })
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.scrollLeft !== this.props.scrollLeft && this.props.scrollLeft < 10) {
      this.setState({arrowView: false})
    } else {
      if (prevProps.scrollLeft !== this.props.scrollLeft && this.props.scrollLeft > 10) {
        this.setState({arrowView: true})
      }
    }
  }


  render() {
    if (this.state.arrowView && document.getElementById('scroll-related').scrollLeft > 0) {
      return (
        <div onClick={this.props.scrollClickLeft} style={{
          margin: '5px',
          marginLeft: '20px',
          marginRight: '-20px',
          padding: '0px',
          zIndex: '20'
        }}>&lt;</div>
      )
    } else {
      return (
        <></>
      )
    }

  }
}

export default ScrollLeft