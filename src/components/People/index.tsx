import React from 'react';
import styles from '../Planet/Planet.module.scss';
import { NavLink } from 'react-router-dom';
import { getIdInUrl } from '../../utils';

type PeopleProps = {
  name: string;
  gender: string;
  birth_year: string;
  url: string;
} & React.ComponentPropsWithoutRef<'div'>;

export const People = React.forwardRef<HTMLDivElement, PeopleProps>(
  (props, ref) => {
    return (
      <div className={styles.root} ref={ref}>
        <NavLink to={`/people/${getIdInUrl(props.url)}`}>
          <h2>{props.name}</h2>
        </NavLink>
        <span>Gender: {props.gender}</span>
        <span>Birth year: {props.birth_year}</span>
      </div>
    );
  }
);
