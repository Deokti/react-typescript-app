import React from 'react';


import './todo-list-item.scss';

export const TodoListItem: React.FC<{ label: string, onDone(): void, onMarkDone: boolean, onDelete(): void }> = ({ label, onDone, onMarkDone, onDelete }) => {
  const markDone = onMarkDone ? 'todo-list-item--done' : '';

  return (
    <span className={`todo-list-item ${markDone}`}>
      <span className="todo-list-item__label">{label}</span>

      <span className="todo-list-item__buttons">
        <span
          title="Поменить как выполненное"
          className="todo-list-item__button todo-list-item__button--done"
          onClick={onDone}>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" fill="#1EFE4F"><path d="M12.8.2c-.254-.268-.665-.268-.92 0l-7.787 8.23L1.1 5.268C.856 5 .444 5 .2 5.268s-.254.703 0 .97l3.453 3.65c.254.268.666.268.92 0L12.8 1.173c.254-.268.254-.703 0-.972z" /></svg>
        </span>
        <span title="Удалить" onClick={onDelete}
          className="todo-list-item__button todo-list-item__button--delete"></span>
      </span>
    </span>
  );
}
