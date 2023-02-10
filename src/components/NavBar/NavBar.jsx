import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <ul>
      <NavLink style={({ isActive }) => (isActive ? 'active' : '')}>
        <li>Home</li>
      </NavLink>
      <NavLink style={({ isActive }) => (isActive ? 'active' : '')}>
        <li>Admin Panel</li>
      </NavLink>
    </ul>
  );
};
