import React from 'react';

import { TodoListItem } from '../todo-list-item';


export const TodoList: React.FC = () => {


  return (
    <ul className="todo-list ul-none">
      <TodoListItem />
    </ul>
  );
}
