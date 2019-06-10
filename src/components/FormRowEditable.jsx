import React, { Component } from 'react';
import FormRow from './FormRow';

export default class FormRowPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <FormRow type="editable">
        <div className="form-row__value">Notif #1</div>
        <div className="form-row__description">Nothing to see here</div>
        <div className="form-row__btn-action">Edit</div>
      </FormRow>
    );
  }
}
