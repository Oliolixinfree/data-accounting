import React from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { removeUser } from '../../store/slices/userSlice';

export const HomePage = () => {
  const { isAuth, email, displayName } = useAuth();
  const dispatch = useDispatch();

  return isAuth ? (
    <>
      welcome
      <button onClick={() => dispatch(removeUser())}>
        Log out {email} {displayName}
      </button>
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};
