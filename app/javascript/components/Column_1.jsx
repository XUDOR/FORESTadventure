// In Column_1.jsx
import React from 'react';
import View from './View';
import Console from './Console';
import '../stylesheets/components/column_1.scss';



const Column_1 = () => {
  return (
    <div className="column-1">
      <View />
      <Console />
    </div>
  );
};

export default Column_1;
