import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PlanetsPage } from './pages/PlanetsPage';
import './App.scss';

export const App: React.FC = () => {
  return (
    <div className="wrapper">
      <h1 className="title">Star Wars</h1>
      <Routes>
        <Route path={'/'} element={<PlanetsPage />} />
      </Routes>
    </div>
  );
};
