import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { NavBar } from '../components/NavBar/NavBar';
import styles from './Layout.module.scss';

export const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <NavBar />
      <Header />

      <Main>
        <Outlet />
      </Main>

      <Footer />
    </div>
  );
};
