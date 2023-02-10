import React from 'react';
import styles from './Register.module.scss';
import { Link } from 'react-router-dom';
import { SingUp } from '../../components/SignUp/SignUp';

export const RegisterPage = () => {
  return (
    <>
      <h1>RegisterPage</h1>
      <SingUp />
      Already have an account?
      <Link to="/login">
        <span className={styles.link}> Sign in</span>
      </Link>
    </>
  );
};
