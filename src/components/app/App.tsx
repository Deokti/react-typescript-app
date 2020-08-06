import React, { Component } from 'react';

import { SearchPanel } from '../search-panel';
import { StatusFilterItem } from '../item-filter-status';
import { templateOneItem } from '../template-one-item';
import { TodoList } from '../todo-list';

import './App.scss';



export default class App extends Component {
  state = {
    filterStatus: 'all',
    todoListItems: [
      templateOneItem('Первое дело'),
      templateOneItem('Второе дело, которые нужно сделать'),
      templateOneItem('Третье дело, которые обязательно к завершению'),
    ],
  }


  render() {
    const { filterStatus, todoListItems } = this.state;

    return (
      <section className="app">
        <div className="container">

          <div className="app-header">
            <div className="app-header-search">
              <SearchPanel />
            </div>
            <div className="app-header-filter">
              <StatusFilterItem filterStatus={filterStatus} />
            </div>
          </div>

          <div className="app-content">
            <TodoList />
          </div>


        </div>
      </section>

    );
  }
}
