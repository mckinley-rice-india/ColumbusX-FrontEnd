/**
 * TODO:
 * -  Filtering Section
 */

import React, { Component } from 'react';

import '../styles/form.css';
import FormCard from '../components/FormCard';
import FormRowRemovable from '../components/FormRowRemovable';
import FormSeperator from '../components/FormSeperator';
import FormSection from '../components/FormSection';
import FormRowPassword from '../components/FormRowPassword';
import FormRowSelect from '../components/FormRowSelect';
import FormRowEditable from '../components/FormRowEditable';
import FormRowFilter from '../components/FormRowFilter';

export default class AccountSetings extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <FormCard>
        <FormSection>
          <div className="form-section__header">
            Header
          </div>
          <div className="form-subsection">
            <div className="form-subsection__subheader">
              Sub-header
            </div>
            <FormRowRemovable value="abc@123.com" />
            <FormRowRemovable value="abc@123232.com" />
            <FormRowRemovable value="abasdasdc@123.com" />
            <div className="form-flat-action">
              Flat-Action
            </div>
          </div>
          <div className="form-subsection">
            <div className="form-subsection__subheader">
              Sub-header
            </div>
            <FormRowRemovable />
            <div className="form-flat-action">
              Flat-Action
            </div>
          </div>
        </FormSection>
        <FormSeperator />
        <FormSection>
          <div className="form-section__header">Password</div>
          <FormRowPassword />
          <FormRowSelect />
        </FormSection>
        <FormSeperator />
        <FormSection>
          <div className="form-section__header">Notifications</div>
          <FormRowEditable />
          <FormRowEditable />
          <FormRowEditable />
        </FormSection>
        <FormSeperator />
        <FormSection>
          <FormRowFilter />
        </FormSection>
      </FormCard>
    );
  }
}
