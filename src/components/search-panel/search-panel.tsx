import React, { useState } from 'react';

import './search-panel.scss';

export const SearchPanel: React.FC<{ onChangeSearch(search: string): void }> = ({ onChangeSearch }) => {
  const [label, setLabel] = useState<string>('');

  // Говорим, что тип события React.ChangeEvent, то есть cnahge изминение. 
  // И для того, чтобы было поле value добавляем событте джинерик типа, который является HTMLInputElement
  const onSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(event.target.value);
    onChangeSearch(event.target.value);
  };

  return <input
    type="text"
    value={label}
    className="seach-panel"
    placeholder="Поиск по списку дел"
    onChange={onSearchInput} />
};

