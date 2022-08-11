import React from 'react';
import styles from './Planet.module.scss';
import { NavLink } from 'react-router-dom';

type PlanetProps = {
  name: string;
  population: string;
  terrain: string;
} & React.ComponentPropsWithoutRef<'div'>;

export const Planet = React.forwardRef<HTMLDivElement, PlanetProps>(
  ({ ...props }, ref) => {
    return (
      <div className={styles.root} ref={ref}>
        <NavLink to={`/planet/${props.name}`}>
          <h2>{props.name}</h2>
        </NavLink>
        <span>Population: {props.population}</span>
        <span>Terrain: {props.terrain}</span>
      </div>
    );
  }
);
