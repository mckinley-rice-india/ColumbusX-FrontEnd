/**
 * Props:
 * -  Single/Multi
 * -  [Title, [Options]] or Array of those
 *
 * TODO: Implement Interface to handle different features
 */

import React, { Component } from 'react';
import FormRow from './FormRow';

class FormRowSelect extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <FormRow type="select">
        <div className="form-row--select__title">Title</div>
        <select className="form-row--select__menu">
          <option value="A">A</option>
          <option value="B">B</option>
        </select>
      </FormRow>
    );
  }
}

export default FormRowSelect;
