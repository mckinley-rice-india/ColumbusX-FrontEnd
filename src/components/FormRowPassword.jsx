import React, { Component } from 'react';
import FormRow from './FormRow';

export default class FormRowPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <FormRow type="password">
        <input className="form-row__input form-row__input--password" type="password" value="password" />
        <div className="form-row__btn-action">Change</div>
      </FormRow>
    );
  }
}
