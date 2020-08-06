import React, { useState } from 'react';

import { SearchPanel } from '../search-panel';
import { StatusFilterItem } from '../item-filter-status';
import { templateOneItem } from '../template-one-item';
import { TodoList } from '../todo-list';
import { AddForm } from '../add-form';

import './App.scss';


const App: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [search, setSearch] = useState<string>('');
  const [todoListItems, setTodoListItems] = useState([
    templateOneItem('Первое дело для проверка работоспособности'),
    templateOneItem('Второе дело, написанное намного длиннее, дабы поссмотреть как текст будет себя вести и переноситься, когда его слишком много'),
    templateOneItem('Третье дело, для того, чтобы не оставлять два, так как не особо это нравится. Да и как говорится, Бог любит Троицу'),
  ]);


  const onDone = (id: number) => {
    const getElementOfIndex = todoListItems.findIndex((item) => item.id === id);
    const getElement = todoListItems[getElementOfIndex];
    const getValue = !getElement.done;
    const createNewElement = { ...getElement, done: getValue };

    setTodoListItems([
      ...todoListItems.slice(0, getElementOfIndex),
      createNewElement,
      ...todoListItems.slice(getElementOfIndex + 1)
    ])
  };

  const onDelete = (id: number) => {
    const getElementOfIndex = todoListItems.findIndex((item) => item.id === id);
    setTodoListItems([
      ...todoListItems.slice(0, getElementOfIndex),
      ...todoListItems.slice(getElementOfIndex + 1),
    ]);
  }

  const onAddItem = (label: string) => {
    const newTodoItem = templateOneItem(label);
    setTodoListItems([...todoListItems, newTodoItem]);
  }


  const onChangeFilterStatus = (filterStatus: string) => setFilterStatus(filterStatus);
  const onChangeSearch = (search: string) => setSearch(search);

  const filterItems = (todoListItems: any[], filterStatus: string) => {
    if (filterStatus === 'all') return todoListItems;
    if (filterStatus === 'active') return todoListItems.filter(item => !item.done);
    if (filterStatus === 'done') return todoListItems.filter(item => item.done);
    return todoListItems;
  }


  const searchItems = (todoListItems: any[], search: string) => {
    if (search.length === 0) return todoListItems;

    return todoListItems.filter(item => item.label
      .toLowerCase()
      .includes(search.toLowerCase()));
  }


  // вЫзывает filterItems, первым параметров передавая searchItems, который возвращает массив, 
  // который соответствует требованиям этого метода, а второй передаём текущий статус фильтра
  const viewItems = filterItems(searchItems(todoListItems, search), filterStatus);

  return (
    <section className="app" >
      <div className="container">

        <div className="app-header">
          <div className="app-header-search">
            <SearchPanel onChangeSearch={onChangeSearch} />
          </div>
          <div className="app-header-filter">
            <StatusFilterItem
              filterStatus={filterStatus}
              onChangeFilterStatus={onChangeFilterStatus} />
          </div>
        </div>

        <div className="app-content">
          <TodoList
            todoListItems={viewItems}
            onDone={onDone}
            onDelete={onDelete} />
        </div>

        <div className="app-form">
          <AddForm onAddItem={onAddItem} />
        </div>
      </div>
    </section >
  );
};

export default App;