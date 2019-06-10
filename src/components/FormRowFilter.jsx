import React, { Component } from 'react';
import FormRow from './FormRow';

export default class FormRowPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <FormRow type="filter">
        <div className="form-row__title">Filter</div>
        <input className="form-row__input form-row__input--filter" type="text" />
        <div className="form-row__btn-action">Add</div>
        <div className="form-row__tags">Tags</div>
      </FormRow>
    );
  }
}
