import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <div className="form-card">
        {children}
      </div>
    );
  }
}

FormCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

FormCard.defaultProps = {
  children: null,
};
