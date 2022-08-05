import React from 'react';
import styles from './Planet.module.scss';

export const Planet: React.FC = () => {
    return <div className={styles.planet}>
        <h1 className={styles.title}>Planet</h1>
    </div>
}