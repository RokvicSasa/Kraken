import React from 'react'
import styled from "styled-components"
import { useDispatch } from "react-redux";

import { setDarkMode, setLightMode } from "../../redux/darkModeSlice"; 

const Toggle = ({theme}) => {
  const dispatch = useDispatch();

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
      <Button onClick={toggleTheme} >
        Switch Theme
      </Button>
  );
};

const Button = styled.button`
  background: ${(props) => props.theme.background};
  border: 0px;
  color: #fff;
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
`;

export default Toggle;