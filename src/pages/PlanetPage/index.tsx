import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { useParams } from 'react-router-dom';
import { getPlanetById } from '../../redux/planets/asyncActions';
import styles from './PlanetPage.module.scss';

export const PlanetPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { currPlanet } = useAppSelector((state) => state.planets);

  React.useEffect(() => {
    dispatch(getPlanetById(Number(id)));
  }, []);

  return (
    <div>
      {currPlanet ? (
        <div className={styles.root}>
          <h1 className={styles.info}>{currPlanet.name}</h1>
          <div>
            <span>Rotation period: </span>
            <span className={styles.info}>{currPlanet.rotation_period} </span>
          </div>
          <div>
            <span>Orbital period: </span>
            <span className={styles.info}>{currPlanet.orbital_period}</span>
          </div>
          <div>
            <span>Diameter: </span>
            <span className={styles.info}>{currPlanet.diameter}</span>
          </div>
          <div>
            <span>Climate: </span>
            <span className={styles.info}>{currPlanet.climate}</span>
          </div>
          <div>
            <span>Gravity: </span>
            <span className={styles.info}>{currPlanet.gravity}</span>
          </div>
          <div>
            <span>Terrain: </span>
            <span className={styles.info}>{currPlanet.terrain}</span>
          </div>
          <div>
            <span>Surface water: </span>
            <span className={styles.info}>{currPlanet.surface_water}</span>
          </div>
          <div>
            <span>Population: </span>
            <span className={styles.info}>{currPlanet.population}</span>
          </div>
          <div>
            <h2 className={styles.info}>Films</h2>
            <div className={styles.films}>
              {currPlanet.films.map((item) => (
                <span>{item}</span>
              ))}
            </div>
          </div>
          <div>
            <h2 className={styles.info}>Residents</h2>
            <div className={styles.residents}>
              {currPlanet.residents.map((item) => (
                <span>{item}</span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>Нет планеты</div>
      )}
    </div>
  );
};
