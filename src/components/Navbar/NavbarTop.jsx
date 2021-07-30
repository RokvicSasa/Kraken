import React from "react";
import styled, { useTheme } from "styled-components";
import { useDispatch } from "react-redux";
import { openMobile } from "../../redux/sidebarSlice";
import { NavLink } from "react-router-dom";
// Components
import SearchInput from "../Inputs/SearchInput";
import SidebarMobile from "../Navbar/SidebarMobile";
// Assets
import LogoImg from "../../assets/svg/logo";
import BurgerImg from "../../assets/svg/burger";

const NavbarTop = () => {
  const currentTheme = useTheme();
  const dispatch = useDispatch();

  return (
    <WrapperDiv className="flexSpaceCenter">
      <SidebarMobile />
      <LeftSection className="flexSpaceCenter">
        <LogoWrapper className="flexCenter pointer" to="/" exact>
          <LogoImg width="25" height="30" color={currentTheme.green} />
        </LogoWrapper>
        <BurgerWrapper className="flexCenter pointer" onClick={() => dispatch(openMobile())}>
          <BurgerImg color={currentTheme.white} />
        </BurgerWrapper>
      </LeftSection>
      <RightSection className="flexNullCenter">
        <SearchInput />
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
const LogoWrapper = styled(NavLink)`
  padding: 0 15px;
  height: 100%;
  outline: none;
  border: 0px;
  background-color: transparent;
`;
const BurgerWrapper = styled.button`
  width: 70px;
  min-width: 70px;
  height: 100%;
  border: 0px;
  outline: none;
  background-color: transparent;
`;