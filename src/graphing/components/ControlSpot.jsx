import React from 'react';

class ControlSpot extends React.Component {
  constructor(props) {
    super(props);
    this.onMouseDownHandler =  this.onMouseDownHandler.bind(this)
    this.onMouseUpHandler =  this.onMouseUpHandler.bind(this);
    this.onMouseMoveHandler = this.onMouseMoveHandler.bind(this)
  }

  onMouseDownHandler(e){
    console.log('e.clientX: ', e.clientX)
    console.log('target: ', e.target)
  }

  onMouseUpHandler(e){
    console.log('target: ', e.target)
  }

  onMouseMoveHandler(){

  }

  render() {
    const { cx, cy, r, stroke, strokeWidth, fill } = this.props;

    return (
      <circle
        cx={cx}
        cy={cy}
        r={r}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
        onMouseDown={this.onMouseDownHandler}
        onMouseUp={this.onMouseUpHandler}
        onMouseMove={this.onMouseMoveHandler}/>
    );
  }
}

ControlSpot.defaultProps = {
  r: 6,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 1
};

export default ControlSpot;
