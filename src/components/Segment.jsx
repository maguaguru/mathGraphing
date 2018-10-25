import React from 'react';
import ControlSpot from './ControlSpot';

class Segment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { x1, y1, x2, y2, stroke, strokeWidth } = this.props;
    const style = {
      stroke: stroke, strokeWidth: strokeWidth
    }
    return (
      <g className="sector">
        <ControlSpot cx={x1} cy={y1} />
        <line x1={x1} y1={y1} x2={x2} y2={y2} style={style}/>
        <ControlSpot cx={x2} cy={y2} />
      </g>
    );
  }
}

export default Segment;