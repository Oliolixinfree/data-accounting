import React from 'react';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <>
      <h1>LoginPage</h1>
      <Link to="/register">Register</Link>
    </>
  );
};
