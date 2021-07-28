import React from 'react';
import styled from "styled-components";
// Components
import LogoutBtn from "../Other/LogoutBtn";
import AddItemBtn from "../Other/AddItemBtn";
import VerticalNavbar from "../Navbar/VerticalNavbar";
// Assets
import BurgerIcon from "../../assets/svg/burger";

const SidebarDesktop = () => {
  return (
    <WrapperDiv className="flexSpaceCenter flexColumn">
      <BurgerWrapper className="flexCenter pointer" onClick={() => alert("ahoy")}>
        <BurgerIcon />
      </BurgerWrapper>
      <NavWrapper>
        <VerticalNavbar />
      </NavWrapper>
      <BottomWrapper>
        <AddItemBtn />
        <LogoutBtn />
      </BottomWrapper>
    </WrapperDiv>
  );
};

export default SidebarDesktop;

const WrapperDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 80px;
  z-index: 50;
  width: 80px;
  height: 100vh;
  background-color: ${(props) => props.theme.sidebarBg};
  overflow-y: auto;
  overflow-x: hidden;
`;
const BurgerWrapper = styled.button`
  width: 80px;
  height: 60px;
  border: 0px;
  outline: none;
  background-color: transparent;
  overflow-x: hidden;
`;
const NavWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`;
const BottomWrapper = styled.div`
  width: 100%;
`;