import PropTypes from 'prop-types';
import React from 'react';

class SVGContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const components = this.props.content.data.components;
    console.log('components: ', components);
    return (
      <svg width={this.props.width} height={this.props.height} xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="blue"
          fill="lightblue"
        />
      </svg>
    );
  }
}

export default SVGContainer