import React from 'react';


import './item-filter-status.scss';

const itemsFilterStatus = [
  { name: 'all', label: 'Все' },
  { name: 'active', label: 'Активные' },
  { name: 'done', label: 'Выполненные' },
];


export const StatusFilterItem: React.FC<{ filterStatus: string }> = ({ filterStatus }) => {
  const createFilter = itemsFilterStatus.map(({ name, label }) => {
    const addClass = filterStatus === name ? 'item-active' : '';

    return (
      <li className={`status-filter-item ${addClass}`}
        data-filter={name}
        key={name}>
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