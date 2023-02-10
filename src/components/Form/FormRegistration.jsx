import React, { useState } from 'react';

export const FormRegistration = ({ title, handleClick }) => {
  const [formData, setFormData] = useState({
    name: '',
    // lastName: '',
    email: '',
    password: '',
  });

  const handeleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        // value={formData.firstName}
        onChange={handeleChange}
        placeholder="enter first name"
        name="name"
      />
      {/* <input
        type="text"
        // value={formData.lastName}
        onChange={handeleChange}
        placeholder="enter last name"
        name="lastName"
      /> */}
      <input
        type="email"
        // value={formData.email}
        onChange={handeleChange}
        placeholder="enter email"
        name="email"
      />
      <input
        type="password"
        // value={formData.password}
        onChange={handeleChange}
        placeholder="enter password"
        name="password"
      />
      <button onClick={() => handleClick(formData)}>{title}</button>
    </form>
  );
};
