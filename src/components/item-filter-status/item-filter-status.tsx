import React from 'react';


import './item-filter-status.scss';

const itemsFilterStatus = [
  { name: 'all', label: 'Все' },
  { name: 'active', label: 'Активные' },
  { name: 'done', label: 'Выполненные' },
];


export const StatusFilterItem: React.FC<{ filterStatus: string, onChangeFilterStatus(filterStatus: string): void }> = ({ filterStatus, onChangeFilterStatus }) => {
  const createFilter = itemsFilterStatus.map(({ name, label }) => {
    const addClass = filterStatus === name ? 'item-active' : '';

    return (
      <li className={`status-filter-item ${addClass}`}
        data-filter={name}
        key={name}
        onClick={() => onChangeFilterStatus(name)}>
        {label}
      </li>
    );
  });


  return (
    <ul className="status-filter ul-none">
      {createFilter}
    </ul>
  );
};