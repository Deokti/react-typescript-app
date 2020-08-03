import React from 'react';

import './header-title.scss';


type LabelType = { label: string }

export const HeaderTitle: React.FunctionComponent<LabelType> = ({ label }) => {
  return <h1 className="header-title">{label}</h1>
};