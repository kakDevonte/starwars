import React from 'react';
import './App.scss';
import { PlanetsPage } from './pages/PlanetsPage';

export const App: React.FC = () => {
  return (
    <div className="wrapper">
      <h1>Star Wars</h1>
      <PlanetsPage />
    </div>
  );
};
