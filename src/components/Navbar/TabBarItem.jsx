import React from "react";
import styled, { useTheme } from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
// Assets
import DashboardIcon from "../../assets/svg/nav/dashboard";
import LibrarryIcon from "../../assets/svg/nav/librarry";
import GalleryIcon from "../../assets/svg/nav/gallery";
import NewsIcon from "../../assets/svg/nav/news";
import AboutIcon from "../../assets/svg/nav/about";

const TabBar = ({ icon, path, vertical, title }) => {
  const currentTheme = useTheme();
  const location = useLocation();
  const sidebarOpen = useSelector((state) => state.sidebar.open);

  let menuIcon = <div></div>;

  if (icon === "dashboard") {
    menuIcon = (
      <DashboardIcon
        color={
          location.pathname === path ? (vertical ? currentTheme.main : currentTheme.green) : vertical ? currentTheme.sidebarColor : currentTheme.tabbarLink
        }
      />
    );
  } else if (icon === "librarry") {
    menuIcon = (
      <LibrarryIcon
        color={
          location.pathname === path ? (vertical ? currentTheme.main : currentTheme.green) : vertical ? currentTheme.sidebarColor : currentTheme.tabbarLink
        }
      />
    );
  } else if (icon === "gallery") {
    menuIcon = (
      <GalleryIcon
        color={
          location.pathname === path ? (vertical ? currentTheme.main : currentTheme.green) : vertical ? currentTheme.sidebarColor : currentTheme.tabbarLink
        }
      />
    );
  } else if (icon === "news") {
    menuIcon = (
      <NewsIcon
        color={
          location.pathname === path ? (vertical ? currentTheme.main : currentTheme.green) : vertical ? currentTheme.sidebarColor : currentTheme.tabbarLink
        }
      />
    );
  } else if (icon === "about") {
    menuIcon = (
      <AboutIcon
        color={
          location.pathname === path ? (vertical ? currentTheme.main : currentTheme.green) : vertical ? currentTheme.sidebarColor : currentTheme.tabbarLink
        }
      />
    );
  } else {
    menuIcon = (
      <DashboardIcon
        color={
          location.pathname === path ? (vertical ? currentTheme.main : currentTheme.green) : vertical ? currentTheme.sidebarColor : currentTheme.tabbarLink
        }
      />
    );
  }

  return (
    <StyledLink
      to={path}
      exact
      className="flexNullCenter animate"
      activeStyle={vertical ? { backgroundColor: currentTheme.body } : { backgroundColor: currentTheme.tabbarHover }}
    >
      <IconWrapper className="flexCenter">{menuIcon}</IconWrapper>
      {sidebarOpen ? (
        <LinkText
          className="font15 medium"
          style={{
            color:
              location.pathname === path ? (vertical ? currentTheme.main : currentTheme.green) : vertical ? currentTheme.sidebarColor : currentTheme.tabbarLink,
          }}
        >
          {title}
        </LinkText>
      ) : null}
    </StyledLink>
  );
};

export default TabBar;

const StyledLink = styled(NavLink)`
  border: 0px;
  outline: none;
  background-color: transparent;
  width: calc(100% - 20px);
  height: calc(100% - 10px);
  margin: 5px auto;
  border-radius: 10px;
`;
const IconWrapper = styled.div`
  width: 80px;
  height: 62px;
  border-radius: 5px;
`;
const LinkText = styled.p`
  color: ${(props) => props.theme.sidebarColor};
`;