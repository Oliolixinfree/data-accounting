import React, { useState } from 'react';

export const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="enter email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="enter password"
      />
      <button onClick={() => handleClick(email, password)}>{title}</button>
    </div>
  );
};
