import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterPage = () => {
  return (
    <>
      <h1>RegisterPage</h1>
      Already have an account? <Link to="/login">Sign in</Link>
    </>
  );
};
