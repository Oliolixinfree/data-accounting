import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';

export const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    const usersCollection = collection(db, 'users');

    getDocs(usersCollection)
      .then((res) => {
        console.log(res.docs);
        const usersList = res.docs.map((doc) => ({ data: doc.data(), id: doc.id }));
        setUsers(usersList);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      <button onClick={() => getUsers()}>Refresh users</button>
      {users.map((u) => (
        <ul key={u.id}>
          <li>name: {u.data.name}</li>
          <li>email: {u.data.email}</li>
        </ul>
      ))}
    </div>
  );
};
