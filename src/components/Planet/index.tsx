import React from 'react';
import styles from './Planet.module.scss';
import { NavLink } from 'react-router-dom';

type PlanetProps = {
  id: string;
  name: string;
  population: string;
  terrain: string;
};

export const Planet: React.FC<PlanetProps> = (props) => {
  return (
    <div className={styles.root}>
      <NavLink to={`/planet/${props.id}`}>
        <h2>{props.name}</h2>
      </NavLink>
      <span>Population: {props.population}</span>
      <span>Terrain: {props.terrain}</span>
    </div>
  );
};
