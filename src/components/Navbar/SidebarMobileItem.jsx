import React from "react";
import styled, { useTheme } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, setLightMode } from "../../redux/darkModeSlice"; 
import { NavLink } from "react-router-dom";
import { closeMobile } from "../../redux/sidebarSlice";
// Components
import Switch from "../Buttons/Switch";
// Assets
import PencilIcon from "../../assets/svg/pencilIcon";
import LogoutIcons from "../../assets/svg/logoutIcon";
import BellIcon from "../../assets/svg/bellIcon";
import GearIcon from "../../assets/svg/gearIcon";
import SunIcon from "../../assets/svg/sunIcon";
import PlusCircleIcon from "../../assets/svg/plusCircleIcon";

const SidebarMobileItem = ({ icon, title, action, withSwitch, path }) => {
  const theme = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();
  const currentTheme = useTheme();

  let menuIcon = <div></div>;

  if (icon === "pencil") {
    menuIcon = <PencilIcon color={currentTheme.text} />;
  } else if (icon === "logout") {
    menuIcon = <LogoutIcons color={currentTheme.text} />;
  } else if (icon === "bell") {
    menuIcon = <BellIcon width={22} height={24} color={currentTheme.text} />;
  } else if (icon === "gear") {
    menuIcon = <GearIcon color={currentTheme.text} />;
  } else if (icon === "sun") {
    menuIcon = <SunIcon color={currentTheme.text} />;
  } else if (icon === "plus") {
    menuIcon = <PlusCircleIcon color={currentTheme.text} />;
  } else {
    menuIcon = <PlusCircleIcon color={currentTheme.text} />;
  }

  const toggleTheme = () => {
    if (theme === "dark") {
      dispatch(setLightMode());
      window.localStorage.setItem("theme", "light");
    } else {
      dispatch(setDarkMode());
      window.localStorage.setItem("theme", "dark");
    }
  };

  return (
    <>
      {withSwitch ? (
        <WrapperDiv className="flexSpaceCenter pointer" onClick={() => toggleTheme()}>
          <div className="flexSpaceCenter pointer">
            <IconDiv className="flexCenter">{menuIcon}</IconDiv>
            <p className="font15">{title}</p>
          </div>
          <SwitchWrapper>
            <Switch SwitchOn={theme === "dark"} />
          </SwitchWrapper>
        </WrapperDiv>
      ) : path ? (
        <NavLink to={path} exact className="flexNullCenter animate pointer" onClick={() => dispatch(closeMobile())}>
          <WrapperDiv className="flexNullCenter pointer">
            <IconDiv className="flexCenter">{menuIcon}</IconDiv>
            <p className="font15">{title}</p>
          </WrapperDiv>
        </NavLink>
      ) : (
        <WrapperDiv className="flexNullCenter animate pointer" onClick={ action ? () => {dispatch(closeMobile()); action()} : null}>
          <IconDiv className="flexCenter">{menuIcon}</IconDiv>
          <p className="font15">{title}</p>
        </WrapperDiv>
      )}
    </>
  );
};

export default SidebarMobileItem;

const WrapperDiv = styled.button`
  width: 100%;
  height: 55px;
  outline: none;
  border: 0px;
  margin: 6px 0;
  background-color: transparent;
  color: ${(props) => props.theme.text};
  &:hover {
    color: ${(props) => props.theme.main};
  }
`;
const IconDiv = styled.div`
  width: 26px;
  height: 26px;
  margin: 0 25px 0 15px;
`;
const SwitchWrapper = styled.div`
  margin-right: 15px;
`;