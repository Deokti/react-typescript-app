import React from 'react';

import { TodoListItem } from '../todo-list-item';


export const TodoList: React.FC<{ todoListItems: any[], onDone(id: number): void, onDelete(id: number): void }> = ({ todoListItems, onDone, onDelete }) => {
  const createTodoListItem = todoListItems.map(({ id, label, done }) => {
    return (
      <li key={id} className="todo-group-list">
        <TodoListItem
          label={label}
          onMarkDone={done}
          onDone={() => onDone((id))}
          onDelete={() => onDelete(id)} />
      </li>
    );
  });



  return (
    <ul className="todo-list ul-none">
      {createTodoListItem}
    </ul>
  );
}
