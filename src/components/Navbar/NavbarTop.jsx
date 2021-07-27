import React, { useState } from "react";
import styled from "styled-components";
// Components
import SearchInput from "../Inputs/SearchInput";
import SidebarMobile from "../Navbar/SidebarMobile";
// Assets
import LogoImg from "../../assets/svg/logo";
import BurgerImg from "../../assets/svg/burger";
import LoopImg from "../../assets/svg/loop";

const NavbarTop = () => {
  const [sidebarMobileOpen, setSidebarMobileOpen] = useState(false);

  return (
    <WrapperDiv className="flexSpaceCenter">
      <SidebarMobile sidebarMobileOpen={sidebarMobileOpen} closeMobileSidebar={() => setSidebarMobileOpen(false)} />
      <LeftSection className="flexSpaceCenter">
        <LogoWrapper className="flexCenter">
          <LogoImg width="25" height="30" color="#54FE2B" />
        </LogoWrapper>
        <BurgerWrapper className="flexCenter pointer" onClick={() => setSidebarMobileOpen(!sidebarMobileOpen)}>
          <BurgerImg />
        </BurgerWrapper>
      </LeftSection>
      <RightSection className="flexSpaceCenter">
        <SearchInput />
        <SearchButton className="flexCenter pointer" onClick={() => alert("pressed")}>
          <LoopImg />
        </SearchButton>
      </RightSection>
    </WrapperDiv>
  );
};

export default NavbarTop;

const WrapperDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.navbar};
`;
const LeftSection = styled.div`
  height: 100%;
  width: 30%;
  min-width: 120px;
`;
const RightSection = styled.div`
  height: 100%;
  width: 70%;
`;
const LogoWrapper = styled.div`
  padding: 0 15px;
  height: 100%;
`;
const BurgerWrapper = styled.button`
  width: 70px;
  min-width: 70px;
  height: 100%;
  border: 0px;
  outline: none;
  background-color: transparent;
`;
const SearchButton = styled.button`
  height: 100%;
  width: 60px;
  border: 0px;
  outline: none;
  padding: 0 15px;
  background-color: transparent;
`;