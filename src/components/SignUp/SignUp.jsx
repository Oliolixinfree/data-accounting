import React from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/userSlice';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { FormRegistration } from '../Form/FormRegistration';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';

export const SingUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async (formData) => {
    const { name, email, password } = formData;
    const auth = getAuth();
    const registeredUsers = collection(db, 'users');
    // console.log('name', name);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        updateProfile(userAuth.user, {
          displayName: name,
        })
          .then(
            addDoc(registeredUsers, { name, email }),
            dispatch(
              setUser({
                email: userAuth.user.email,
                id: userAuth.user.uid,
                token: userAuth.user.accessToken,
                displayName: name,
              }),
            ),
            navigate('/'),
          )
          .catch((error) => {
            console.log('user not updated');
          });
      })
      .catch((err) => {
        alert(err);
      });
  };

  return <FormRegistration title="Registration" handleClick={handleRegister} />;
};
