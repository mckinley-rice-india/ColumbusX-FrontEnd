import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <div className="form-section">
        {children}
      </div>
    );
  }
}

FormSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

FormSection.defaultProps = {
  children: null,
};
