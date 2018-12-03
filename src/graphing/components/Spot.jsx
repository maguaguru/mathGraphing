import React from 'react';
import ControlSpot from './ControlSpot';

class Spot extends React.Component {
  constructor(props) {
    super(props);
    this.onMouseMoveHandler = this.onMouseMoveHandler.bind(this)
  }

  onMouseMoveHandler(){

  }

  render() {
    const { cx, cy} = this.props;
    return (
      <g className="spot">
        <ControlSpot cx={cx} cy={cy} mouseMove={this.onMouseMoveHandler} />
      </g>
    );
  }
}

export default Spot;