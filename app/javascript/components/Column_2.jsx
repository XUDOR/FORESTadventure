// In Column_2.jsx
import React from 'react';
import Grid from './Grid';
import Inventory from './Inventory';
import '../stylesheets/components/column_2.scss';

const Column_2 = () => {
  return (
    <div className="column-2">
      <Grid />
      <Inventory />
    </div>
  );
};

export default Column_2;
