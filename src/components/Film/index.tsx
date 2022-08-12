import React from 'react';
import styles from './Film.module.scss';
import { NavLink } from 'react-router-dom';
import { getIdInUrl } from '../../utils';

type FilmProps = {
  title: string;
  episode_id: number;
  release_date: string;
  url: string;
};

export const Film: React.FC<FilmProps> = (props) => {
  return (
    <div className={styles.root}>
      <NavLink to={`/film/${getIdInUrl(props.url)}`}>
        <h2>{props.title}</h2>
      </NavLink>
      <h3>Episode {props.episode_id}</h3>
      <span>
        Release date: {new Date(props.release_date).toLocaleDateString()}
      </span>
    </div>
  );
};
