import React from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/userSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Form } from '../Form/Form';
import { useNavigate } from 'react-router-dom';

export const SingUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        );
        navigate('/');
      })
      .catch(console.error);
  };

  return <Form title="Registration" handleClick={handleRegister} />;
};
