import React from 'react';
import { Link } from "react-router-dom";

const Navbar = ({ loggedIn }) => {
  return (
    <>
      {loggedIn ? (
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/library">Library</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
      ) : null}
    </>
  );
};

export default Navbar;