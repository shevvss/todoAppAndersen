import React from 'react';
import styles from './StylesAbout.module.css';
import { Link } from 'react-router-dom';

const AboutStore = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>About Our Store</h1>

      <h3>This is the best store ever! Created by shevvss</h3>

      <Link className={styles.backLink} to='/products'>
        Back
      </Link>
    </div>
  );
};

export default AboutStore;
