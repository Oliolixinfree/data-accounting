import React from 'react';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import User from '../../assets/img/user.jpg';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useMenu } from '../../hooks/useMenu';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../store/slices/menuSlice';

export const Header = () => {
  const { isAuth, email, displayName } = useAuth();
  const { isOpen } = useMenu();
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <button onClick={() => dispatch(toggleMenu(isOpen))} className={styles.menuBtn}>
        <span className={isOpen ? styles.closeBtn : styles.line}></span>
        <span className={isOpen ? styles.closeBtn : styles.line}></span>
        <span className={isOpen ? styles.closeBtn : styles.line}></span>
      </button>
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
