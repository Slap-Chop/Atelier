import React from 'react';

class ScrollRight extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        scrollLeft: 0
    }
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
        this.setState({arrowView: false})
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




  render() {
    if (this.state.arrowView) {
      return(
        <div value='scroll-related' onClick={this.props.scrollClickRight}style={{
          margin: '5px',
          marginLeft: '-20px',
          marginRight: '20px',
          padding: '0px',
          zIndex: '20'
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