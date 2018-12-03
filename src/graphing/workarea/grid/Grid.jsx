import React, { Component } from 'react';
import propTypes from 'prop-types'

class Grid extends Component {
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
          <g className="graphing-grid">
          </g>
        );
    }
}

Grid.propTypes = {
    x: propTypes.number,
    y: propTypes.number,
    width: propTypes.number,
    height: propTypes.number
};

export default Grid;