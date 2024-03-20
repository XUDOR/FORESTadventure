import React from 'react';
import Column_1 from './Column_1';
import Column_2 from './Column_2';
import '../stylesheets/components/main.scss';

const Main = () => {
  return (
    <div className="main-container">
      <Column_1 />
      <Column_2 />
    </div>
  );
};

export default Main;
