import React from 'react';
import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
import { useMenu } from '../../hooks/useMenu';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../store/slices/menuSlice';

export const NavBar = () => {
  const { isOpen } = useMenu();
  const dispatch = useDispatch();
  // style={({ isActive }) => (isActive ? 'active' : '')}
  return (
    <nav className={isOpen ? styles.navBar : styles.closeMenu}>
      <button onClick={() => dispatch(toggleMenu(isOpen))} className={styles.menuBtn}>
        <span className={isOpen ? styles.closeBtn : styles.line}></span>
        <span className={isOpen ? styles.closeBtn : styles.line}></span>
        <span className={isOpen ? styles.closeBtn : styles.line}></span>
      </button>
      <section className={styles.link}>
        <NavLink to="/" onClick={() => dispatch(toggleMenu(isOpen))}>
          <h2>Home</h2>
        </NavLink>
        <NavLink to="/inventory" onClick={() => dispatch(toggleMenu(isOpen))}>
          <h2>Inventory</h2>
        </NavLink>
        <NavLink to="/admin_panel" onClick={() => dispatch(toggleMenu(isOpen))}>
          <h2>Admin Panel</h2>
        </NavLink>
      </section>
    </nav>
  );
};
