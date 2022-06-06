import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Hospital Management</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Hospital List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Hospital
        </NavLink>
      </div>
    </header>
  );
};

export default Header;