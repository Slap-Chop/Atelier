import React from 'react';

class ScrollLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollLeft: 0

    }
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  componentDidMount() {
    var mainWidth = document.getElementById('relatedMain').clientWidth;
    var smallWidth = document.getElementById('related-list').clientWidth;
    var width = mainWidth - smallWidth;
    var listLength = this.props.products.length;
    var listWidth = listLength * 170;

    this.setState({ scrollLeft: this.props.scrollLeft })
    if (listWidth > mainWidth) {
      this.setState({ arrowView: true })
    } else {
      this.setState({ arrowView: true })
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.scrollLeft !== this.props.scrollLeft && this.props.scrollLeft < 1) {
      this.setState({arrowView: true})
    } else {
      if (prevProps.scrollLeft !== this.props.scrollLeft && this.props.scrollLeft > 0) {
        this.setState({arrowView: true})
      }
    }
  }

  onMouseOver() {
    document.getElementById('leftBtn').style.opacity = '80%'
    document.getElementById('leftBtn').style.color = 'black';
    document.getElementById('leftBtn').style.backgroundColor = 'darkGrey';
  }
  onMouseOut() {
    document.getElementById('leftBtn').style.opacity = '0%';
    document.getElementById('leftBtn').style.color = 'grey'
  }


  render() {
    if (this.state.arrowView) {
      return (
        <div id="leftBtn" onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}onClick={this.props.scrollClickLeft} style={{
          margin: '5px',
          marginLeft: '20px',
          marginRight: '-30px',
          zIndex: '20',
          cursor: 'pointer',
          opacity: '0',
          transition: '.3s',
          color: 'gray',
          padding: '5px',
          paddingLeft: '10px',
          paddingTop: '60px',
          paddingBottom: '60px',
          borderRadius: '5%'

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