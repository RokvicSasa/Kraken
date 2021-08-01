import React from "react";
import styled, { useTheme } from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
// Components
import SearchInput from "../Inputs/SearchInput";
import Notification from "../Other/Notifications";
import ModeSwitch from "../Other/ModeSwitch";
import Avatar from "../Other/Avatar";
import Settings from "../Other/Settings";
// Assets
import LogoImg from "../../assets/svg/logo";

const NavbarTop = () => {
  const currentTheme = useTheme();
  const location = useLocation();
  const user = useSelector((state) => state.user)

  const getBreadcrumb = () => {
    let name = "";
    if (location.pathname === "/") {
      name = "Dashboard";
    } else {
      name = location.pathname.substring(1).charAt(0).toUpperCase() + location.pathname.slice(2);
    }
    return name;
  }

  return (
    <WrapperDiv className="flexSpaceCenter">
      <LeftSection className="flexSpaceCenter">
        <LogoWrapper className="flexCenter" to="/" exact>
          <LogoImg width="25" height="30" color={currentTheme.green} />
        </LogoWrapper>
      </LeftSection>
      <RightSection className="flexSpaceCenter">
        <BreadCrumb>
          <BreadcrumbText className="font25 bold">
            Kraken
            <span className="font13" style={{ margin: "0 10px" }}>
              /
            </span>
            <span className="font13 regular">{getBreadcrumb()}</span>
          </BreadcrumbText>
        </BreadCrumb>
        <SearchInputWrapper className="flexNullCenter">
          <SearchInput border />
        </SearchInputWrapper>
        <div className="flexSpaceCenter">
          <Notification />
          <ModeSwitch />
          <AvatarInfo>
            <Title className="font15 semibold">{user?.username}</Title>
            <Subtitle className="font11">
              {user?.city}, {user?.country}
            </Subtitle>
          </AvatarInfo>
          <Avatar small />
          <Settings />
        </div>
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
const LogoWrapper = styled(NavLink)`
  padding: 0 15px;
  height: 100%;
  width: 100%;
  outline: none;
  border: 0px;
  background-color: transparent;
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
const AvatarInfo = styled.div`
  width: 100%;
  width: 150px;
  height: 34px;
  text-align: right;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 20px;
  border-left: 1px solid ${(props) => props.theme.border2};
  @media (max-width: 800px) {
    display: none;
  }
`;
const Title = styled.h1`
  padding-bottom: 5px;
  color: ${(props) => props.theme.white};
`;
const Subtitle = styled.h2`
  color: ${(props) => props.theme.lightText};
`;
const BreadCrumb = styled.div`
  width: 100%;
  height: 34px;
  max-width: 250px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-left: 1px solid ${(props) => props.theme.border2};
  @media (max-width: 990px) {
    display: none;
  }
`;
const BreadcrumbText = styled.h1`
  color: ${(props) => props.theme.white};
`;
