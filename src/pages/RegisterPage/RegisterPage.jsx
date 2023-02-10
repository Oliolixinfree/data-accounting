import React from 'react';
import styles from './Register.module.scss';
import { Link } from 'react-router-dom';

export const RegisterPage = () => {
  return (
    <>
      <h1>RegisterPage</h1>
      Already have an account?
      <Link to="/login">
        <span className={styles.link}> Sign in</span>
      </Link>
    </>
  );
};
