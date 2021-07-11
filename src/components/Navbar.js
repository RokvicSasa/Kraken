import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = ({ loggedIn }) => {
  return (
    <WrapperDiv>
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
    </WrapperDiv>
  );
};

export default Navbar;

const WrapperDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
`;