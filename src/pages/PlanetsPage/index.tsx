import React from 'react';
import { Planet } from '../../components/Planet';
import styles from './PlanetsPage.module.scss';

export const PlanetsPage: React.FC = () => {
  return (
    <div className={styles.root}>
      <Planet />
      <Planet />
      <Planet />
      <Planet />
      <Planet />
      <Planet />
      <Planet />
      <Planet />
      <Planet />
    </div>
  );
};
