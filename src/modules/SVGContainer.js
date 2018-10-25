import React from 'react';
import Segment from '../components/Segment';
import Spot from './../components/Spot'

class SVGContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const components = this.props.content;
    console.log('components: ', components);
    return (
      <svg width={this.props.width} height={this.props.height} xmlns="http://www.w3.org/2000/svg">
        <Spot {...this.props.content.spot} />
        <Segment {...this.props.content.segment}/>
      </svg>
    );
  }
}

export default SVGContainer