import React from "react";
import styled from "styled-components";
// Components
import SearchInput from "../Inputs/SearchInput";
import Notification from "../Other/Notifications";
import ModeSwitch from "../Other/ModeSwitch";
import Avatar from "../Other/Avatar";
import Settings from "../Other/Settings";
// Assets
import LogoImg from "../../assets/svg/logo";

const NavbarTop = () => {
  return (
    <WrapperDiv className="flexSpaceCenter">
      <LeftSection className="flexSpaceCenter">
        <LogoWrapper className="flexCenter">
          <LogoImg width="25" height="30" color="#54FE2B" />
        </LogoWrapper>
      </LeftSection>
      <RightSection className="flexSpaceCenter">
        <SearchInputWrapper className="flexNullCenter">
          <SearchInput border />
        </SearchInputWrapper>
        <Notification />
        <ModeSwitch />
        <Avatar small />
        <Settings />
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
  height: 80px;
  background-color: ${(props) => props.theme.navbar};
`;
const LeftSection = styled.div`
  height: 100%;
  width: 80px;
`;
const LogoWrapper = styled.div`
  padding: 0 15px;
  height: 100%;
  width: 100%;
`;
const RightSection = styled.div`
  height: 100%;
  width: calc(100% - 80px);
`;
const SearchInputWrapper = styled.div`
  width: 100%;
  min-width: 225px;
  max-width: 435px;
  height: 100%;
`;