import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Navbar = () => {
  const token = useSelector((state) => state.token.token);
  return (
    <WrapperDiv>
      {token ? (
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