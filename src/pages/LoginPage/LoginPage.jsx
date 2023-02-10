import React from 'react';
import styles from './LoginPage.module.scss';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <>
      <h1>LoginPage</h1>
      <Link to="/register">
        <span className={styles.link}>Register</span>
      </Link>
    </>
  );
};
