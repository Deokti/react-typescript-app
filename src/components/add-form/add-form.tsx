import React, { useState } from 'react';

import './add-form.scss';

export const AddForm: React.FC<{ onAddItem(label: string): void }> = ({ onAddItem }) => {
  const [label, setLabel] = useState('');

  const onFormInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(event.target.value);
  };

  const onSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    if (label.length <= 5) alert('Новое дело должно быть длиннее 5-ти символов!');
    if (label.length > 5) {
      onAddItem(label);
      setLabel('');
    };
  };

  return (
    <form
      id="form"
      className="add-form"
      onSubmit={onSubmitForm}>
      <input
        type="text"
        value={label}
        placeholder="Новое дело"
        onChange={onFormInput}
        className="add-form-input" />

      <button className="add-form-button">Добавить</button>
    </form>
  )
};