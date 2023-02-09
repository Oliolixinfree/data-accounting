import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

export const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <header style={{ height: '3rem' }}>Header</header>
      <main style={{ height: 'calc(100vh - 6rem)' }}>
        <Outlet />
      </main>

      <footer style={{ height: '3rem' }}>Footer</footer>
    </div>
  );
};
