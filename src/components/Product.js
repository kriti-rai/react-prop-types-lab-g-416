import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Product extends Component {
    render() {
      return(
        <div>
          <h2>{ this.props.name }</h2>
          <p>{ this.props.producer }</p>
          <p>{ this.props.color }</p>
          <p>{ this.props.weight }</p>
        </div>
      )
    }
};

let weightValidation = (props, propName) => {
    let value = props[propName];
    return (!((typeof value == 'number') && (value >= 80)  && (value <= 300))) ? 'Invalid': null;
}

const colors = ["white", "eggshell-white", "salmon"]

Product.propTypes = {
	name: PropTypes.string.isRequired,
	producer: PropTypes.string,
	hasWatermark: PropTypes.bool,
	color: PropTypes.oneOf(colors).isRequired,
	weight: weightValidation
}

Product.defaultProps = {
  hasWatermark: false
}
