import React from 'react';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import User from '../../assets/img/user.jpg';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const Header = () => {
  const { isAuth, email, displayName } = useAuth();

  return (
    <header className={styles.header}>
      <button>MENU</button>
      <section className={styles.logo}>
        <Link to="/">
          <Logo />
        </Link>
      </section>
      <section className={styles.userData}>
        <div className={styles.userName}>{isAuth ? displayName : 'Billy Herrington'}</div>
        <div className={styles.userEmail}>{isAuth ? email : 'threeundredbucks@gmail.com'}</div>
        <img className={styles.userIcon} src={User} alt="user" />
      </section>
    </header>
  );
};
