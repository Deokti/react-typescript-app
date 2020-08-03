import React, { Component } from 'react';

import { SearchPanel } from '../search-panel';
import { StatusFilterItem } from '../item-filter-status';

import './App.scss';

export default class App extends Component {

  render() {
    return (
      <section className="app">
        <div className="container">

          <div className="app-header">
            <div className="app-header-search">
              <SearchPanel />
            </div>
            <div className="app-header-filter">
              <StatusFilterItem />
            </div>
          </div>


        </div>
      </section>

    );
  }
}
