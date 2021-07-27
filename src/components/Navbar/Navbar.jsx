import React from 'react';
import styled from "styled-components";
import { useSelector } from "react-redux";
// Components
import NavbarTop from "./NavbarTop";

const Navbar = ({ theme }) => {
  const token = useSelector((state) => state.user.token);
  return (
    <WrapperDiv>
      {token ? (
        <NavbarTop theme={theme}></NavbarTop>
      ) : null}
    </WrapperDiv>
  );
};

export default Navbar;

const WrapperDiv = styled.div`

`;