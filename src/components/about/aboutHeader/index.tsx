import React from 'react';
import styles from './index.module.css';

const AboutHeader: React.FC = () => {
  return (
    <div className={styles.home__page1}>
      <h1 className={styles.home__page1__title}>BohPJ</h1>
      <h2 className={styles.home__page1__subtitle}>
        Musashino University
      </h2>
    </div>
  );
}

export default AboutHeader;
