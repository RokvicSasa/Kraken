import React from "react";
import styled, { useTheme } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, setLightMode } from "../../redux/darkModeSlice"; 
// Assets
import SunIcon from "../../assets/svg/sunIcon";
import MoonIcon from "../../assets/svg/moonIcon";

const ModeSwitch = () => {
  const theme = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();
  const currentTheme = useTheme();

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
    <Wrapper className="flexCenter">
      <InnerWrapper className="relative flexCenter pointer" onClick={() => toggleTheme()}>
        {theme === "dark" ? <SunIcon color={currentTheme.white} /> : <MoonIcon color={currentTheme.white} />}
      </InnerWrapper>
    </Wrapper>
  );
};

export default ModeSwitch;

const Wrapper = styled.div`
  height: 100%;
  margin: 0 15px 0 0;
`;
const InnerWrapper = styled.button`
  padding: 10px;
  border: 0px;
  outline: none;
  background-color: transparent;
`;
