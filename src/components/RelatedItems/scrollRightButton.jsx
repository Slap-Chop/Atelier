import React from 'react';

class ScrollRight extends React.Component {
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

      this.setState({scrollLeft: this.props.scrollLeft})
      if (listWidth > mainWidth) {
        this.setState({arrowView: true})
      } else {
        this.setState({arrowView: true})
      }
  }

  // componentDidUpdate(prevProps) {
  //   var listLength = this.props.products.length;
  //   var listWidth = listLength * 170;


  //   if (prevProps.scrollLeft !== this.props.scrollLeft && this.props.scrollLeft < listWidth*.35) {
  //     var currScroll = document.getElementById('scroll-related').scrollLeft
  //     this.setState({arrowView: false})

  //   } else {
  //     if (prevProps.scrollLeft !== this.props.scrollLeft && this.props.scrollLeft-prevProps.scrollLeft > 100) {
  //       this.setState({arrowView: true})
  //     }
  //   }
  // }
  onMouseOver() {
    document.getElementById('rightBtn').style.opacity = '80%'
    document.getElementById('rightBtn').style.color = 'black';
    document.getElementById('rightBtn').style.backgroundColor = 'darkGrey';

  }
  onMouseOut() {
    document.getElementById('rightBtn').style.opacity = '0%';
    document.getElementById('rightBtn').style.color = 'grey'
  }




  render() {
    if (this.state.arrowView) {
      return(
        <div id="rightBtn" value='scroll-related' onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}onClick={this.props.scrollClickRight}style={{
          margin: '5px',
          marginLeft: '-30px',
          marginRight: '20px',
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
         }}>&gt;</div>
      )
    } else {
      return(
        <></>
      )
    }

  }
}

export default ScrollRight