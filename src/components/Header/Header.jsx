import React from 'react';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import User from '../../assets/img/user.jpg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.logo}>
        <Link to="/">
          <Logo />
        </Link>
      </section>
      <section className={styles.userData}>
        <div className={styles.userName}>Billy Herrington</div>
        <div className={styles.userEmail}>threeundredbucks@gmail.com</div>
        <img className={styles.userIcon} src={User} alt="user" />
      </section>
    </header>
  );
};
