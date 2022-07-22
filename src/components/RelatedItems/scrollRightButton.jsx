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
      console.log(document.getElementById('scroll-related').scrollLeft);
      console.log(document.getElementById('related-list').scrollWidth, document.getElementById('relatedMain').clientWidth)
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


  render() {
    if (this.state.arrowView) {
      return(
        <div onClick={this.props.scrollClickRight}style={{
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