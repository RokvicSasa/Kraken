import React from "react";
import styled, { useTheme } from "styled-components";
import { useSelector } from "react-redux";
// Assets
import AddItemFill from "../../assets/svg/addItemFill";

const AddItemBtn = () => {
  const currentTheme = useTheme();
  const theme = useSelector((state) => state.darkMode.darkMode);
  return (
    <Wrapper className="flexCenter pointer">
      <AddItemFill color={currentTheme.main} color2={theme === "dark" ? currentTheme.navbar : currentTheme.sidebarBg} />
    </Wrapper>
  );
};

export default AddItemBtn;

const Wrapper = styled.button`
  height: 60px;
  width: 100%;
  border: 0px;
  outline: none;
  background-color: transparent;
`;
