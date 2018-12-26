import React, { Component } from 'react';
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import WorkAreaActions from '../Redux/WorkAreaReducer'
import Spot from '../components/Spot'
import Segment from '../components/Segment';
import Grid from './grid/Grid';

class GraphingWorkarea extends Component {
    constructor(props) {
        super(props);
        this.mouseMoveHandler = this.mouseMoveHandler.bind(this)
    }

    mouseMoveHandler (e){
    console.log('e.clientX: ', e.clientX)
    console.log('e.clientY: ', e.clientY)
        this.props.setMouseCoordinates(e.clientX, e.clientY)

    }

    render() {
        const { x, y, width, height, components } = this.props;
        const waStyle = {
            fill: 'rgb(255,255,255)',
            strokeWidth: 1,
            stroke: 'rgb(0,0,0)'
        };
        return (
          <g className="graphing-workarea" onMouseMove={this.mouseMoveHandler}>
              <rect x={x} y={y} width={width} height={height} style={waStyle} />
              <Spot {...components.spot} />
              <Segment {...components.segment}/>
              <Grid />
          </g>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setMouseCoordinates: (x, y) => dispatch(WorkAreaActions.setMouseCoordinates(x, y)),
})

export default connect(null, mapDispatchToProps)(GraphingWorkarea);

GraphingWorkarea.propTypes = {
    x: propTypes.number,
    y: propTypes.number,
    width: propTypes.number,
    height: propTypes.number
};