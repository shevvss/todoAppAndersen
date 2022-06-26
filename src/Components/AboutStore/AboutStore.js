import React from 'react';
import styles from './StylesAbout.module.css';
import { Link } from 'react-router-dom';

const AboutStore = () => {
  return (
    <div>
      <h1 className={styles.header}>About Our Store</h1>

      <h3>This is the best store ever, created by shevvss</h3>

      <Link className={styles.backLink} to='/index'>
        Back
      </Link>
    </div>
  );
};

export default AboutStore;
