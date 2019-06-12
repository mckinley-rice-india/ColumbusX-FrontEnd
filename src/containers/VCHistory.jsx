import React, { Component } from 'react';

import '../styles/vc-history.css';

export default class VCHistory extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="vc-history">
        <div className="vc-history__options-bar">
          <div className="vc-history__options-bar__select">Select 1</div>
          <div className="vc-history__options-bar__select">Select 2</div>
          <div className="vc-history__options-bar__select">Select 3</div>
        </div>
        <div className="vc-history__card">
          <div className="vc-history__card__timestamp">
            Day, DD Month, YYYY
          </div>
          <div className="vc-history__card__vc-table">
            <div className="vc-history__card__vc-table__vc-row">
              <div className="vc-history__card__vc-table__vc-no">VCNo</div>
              <div className="vc-history__card__vc-table__project-details">PDeets</div>
              <div className="vc-history__card__vc-table__contract-details">CDeets</div>
            </div>
            <div className="vc-history__card__vc-table__vc-row">
              <div className="vc-history__card__vc-table__vc-no">VCNo</div>
              <div className="vc-history__card__vc-table__project-details">PDeets</div>
              <div className="vc-history__card__vc-table__contract-details">CDeets</div>
            </div>
          </div>
        </div>
        <div className="vc-history__card">
          <div className="vc-history__card__timestamp">
            Day, DD Month, YYYY
          </div>
          <div className="vc-history__card__vc-table">
            <div className="vc-history__card__vc-table__vc-row">
              <div className="vc-history__card__vc-table__vc-no">VCNo</div>
              <div className="vc-history__card__vc-table__project-details">PDeets</div>
              <div className="vc-history__card__vc-table__contract-details">CDeets</div>
            </div>
            <div className="vc-history__card__vc-table__vc-row">
              <div className="vc-history__card__vc-table__vc-no">VCNo</div>
              <div className="vc-history__card__vc-table__project-details">PDeets</div>
              <div className="vc-history__card__vc-table__contract-details">CDeets</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
