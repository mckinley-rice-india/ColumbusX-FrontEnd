import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, type } = this.props;

    return (
      <div className={`form-row form-row--${type}`}>
        {children}
      </div>
    );
  }
}

FormRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  type: PropTypes.string.isRequired,
};

FormRow.defaultProps = {
  children: null,
};
