import React, { Component } from 'react';
import propTypes from 'prop-types'
import Grid from './grid/Grid';

class GraphingWorkarea extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { x, y, width, height } = this.props;
        const waStyle = {
            fill: 'rgb(255,255,255)',
            strokeWidth: 1,
            stroke: 'rgb(0,0,0)'
        };
        return (
          <g className="graphing-workarea">
              <rect x={x} y={y} width={width} height={height} style={waStyle} />
              <Grid />
          </g>
        );
    }
}

GraphingWorkarea.propTypes = {
    x: propTypes.number,
    y: propTypes.number,
    width: propTypes.number,
    height: propTypes.number
};

export default GraphingWorkarea;