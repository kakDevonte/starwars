import React from 'react';
import styles from './Planet.module.scss';

export const Planet: React.FC = () => {
    return (
        <div className={styles.root}>
            <div className={styles.icon}></div>
            <div className={styles.info}>
                <h2>Name - {'Tatooine'}</h2>
                <span>Population - {'200000'}</span>
                <span>Terrain - {'desert'}</span>
            </div>
        </div>
    );
};