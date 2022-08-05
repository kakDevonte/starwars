import React from 'react';
import {Planet} from './components/Planet';
import './App.scss';

export const App: React.FC = () => {
    return (
        <div className="wrapper">
            <Planet />
        </div>
    );
};