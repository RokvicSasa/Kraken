import React from "react";
import styled, { useTheme } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, setLightMode } from "../../redux/darkModeSlice"; 
// Components
import Switch from "../Buttons/Switch";
// Assets
import PencilIcon from "../../assets/svg/pencilIcon";
import LogoutIcons from "../../assets/svg/logoutIcon";
import BellIcon from "../../assets/svg/bellIcon";
import GearIcon from "../../assets/svg/gearIcon";
import SunIcon from "../../assets/svg/sunIcon";
import PlusCircleIcon from "../../assets/svg/plusCircleIcon";

const SidebarMobileItem = ({ icon, title, action, withSwitch }) => {
  const theme = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();
  const currentTheme = useTheme();

  let menuIcon = <div></div>;


  if (icon === "pencil") {
    menuIcon = <PencilIcon color={currentTheme.text} />;
  } else if (icon === "logout") {
    menuIcon = <LogoutIcons color={currentTheme.text} />;
  } else if (icon === "bell") {
    menuIcon = <BellIcon color={currentTheme.text} />;
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
          <div className="flexSpaceCenter">
            <IconDiv className="flexCenter">{menuIcon}</IconDiv>
            <TitleP className="font15">{title}</TitleP>
          </div>
          <SwitchWrapper>
            <Switch SwitchOn={theme === "dark"} />
          </SwitchWrapper>
        </WrapperDiv>
      ) : (
        <WrapperDiv className="flexNullCenter pointer" onClick={() => alert("pressed")}>
          <IconDiv className="flexCenter">{menuIcon}</IconDiv>
          <TitleP className="font15">{title}</TitleP>
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
`;
const IconDiv = styled.div`
  width: 26px;
  height: 26px;
  margin: 0 25px 0 15px;
`;
const SwitchWrapper = styled.div`
  margin-right: 15px;
`;
const TitleP = styled.p`
  color: ${(props) => props.theme.text};
`;