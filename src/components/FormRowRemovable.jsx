import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormRow from './FormRow';

export default class FormRowRemovable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value } = this.props;
    return (
      <FormRow type="removable">
        <div className="form-row__value">{value}</div>
        <div className="form-row__btn-action">Remove</div>
      </FormRow>
    );
  }
}

FormRowRemovable.propTypes = {
  value: PropTypes.string.isRequired,
};
