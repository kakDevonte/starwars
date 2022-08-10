import React from 'react';
import { Planet } from '../../components/Planet';
import styles from './PlanetsPage.module.scss';

export const PlanetsPage: React.FC = () => {
  return (
    <div className={styles.root}>
      <Planet
        id={'1'}
        name={'Tatooine'}
        population={'200000'}
        terrain={'desert'}
      />
      <Planet
        id={'2'}
        name={'Alderaan'}
        population={'2000000000'}
        terrain={'grasslands, mountains'}
      />
      <Planet
        id={'2'}
        name={'Yavin IV'}
        population={'1000'}
        terrain={'jungle, rainforests'}
      />
      <Planet
        id={'3'}
        name={'Hoth'}
        population={'unknown'}
        terrain={'tundra, ice caves, mountain ranges'}
      />
      <Planet
        id={'4'}
        name={'Dagobah'}
        population={'unknown'}
        terrain={'swamp, jungles'}
      />
      <Planet
        id={'5'}
        name={'Bespin'}
        population={'6000000'}
        terrain={'gas giant'}
      />
      <Planet
        id={'6'}
        name={'Endor'}
        population={'30000000'}
        terrain={'forests, mountains, lakes'}
      />
      <Planet
        id={'7'}
        name={'Naboo'}
        population={'4500000000'}
        terrain={'grassy hills, swamps, forests, mountains'}
      />
      <Planet
        id={'8'}
        name={'Coruscant'}
        population={'1000000000000'}
        terrain={'cityscape, mountains'}
      />
    </div>
  );
};
