import React from 'react';
import Segment from '../components/Segment';
import GraphingWorkarea from '../workarea/GraphingWorkarea';
import Spot from '../components/Spot'

class SVGContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const components = this.props.content;
    console.log('components: ', components);
    const waWidth = parseInt(this.props.width) - 20;
    const waHeight = parseInt(this.props.height) - 20;
    return (
      <svg width={this.props.width} height={this.props.height} xmlns="http://www.w3.org/2000/svg">
          <GraphingWorkarea x={10} y={10} width={waWidth} height={waHeight}/>
        <Spot {...this.props.content.spot} />
        <Segment {...this.props.content.segment}/>
      </svg>
    );
  }
}

export default SVGContainer