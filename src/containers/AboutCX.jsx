import React, { Component } from 'react';

import '../styles/content.css';

const loremIpsum = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo';

export default class AboutCX extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="content">
        <div className="content__select">
          <div className="content__select__topic">Topic</div>
          <div className="content__select__language">Language</div>
          <span className="content__select__desc">Description</span>
        </div>
        <div className="content__posts">
          <div className="content__posts__row">
            <div className="content__posts__row__text">
              <span className="content__posts__row__text__timestamp">Updated on 12, Jan 2018</span>
              <h1 className="content__posts__row__text__title">Title</h1>
              {loremIpsum}
            </div>
            <div className="content__posts__row__img" />
          </div>
          <div className="content__posts__row">
            <div className="content__posts__row__text">
              <span className="content__posts__row__text__timestamp">Updated on 12, Jan 2018</span>
              <h1 className="content__posts__row__text__title">Title</h1>
              {loremIpsum}
            </div>
            <div className="content__posts__row__img" />
          </div>
          <div className="content__posts__row">
            <div className="content__posts__row__text">
              <span className="content__posts__row__text__timestamp">Updated on 12, Jan 2018</span>
              <h1 className="content__posts__row__text__title">Title</h1>
              {loremIpsum}
            </div>
            <div className="content__posts__row__img" />
          </div>
        </div>
      </div>
    );
  }
}
