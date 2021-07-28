import React from "react";
import styled, { useTheme } from "styled-components";
// Assets
import LogoutIcon from "../../assets/svg/logoutIcon";

const LogoutBtn = () => {
  const currentTheme = useTheme();
  return (
    <Wrapper className="flexCenter pointer">
      <LogoutIcon color={currentTheme.sidebarColor} />
    </Wrapper>
  );
};

export default LogoutBtn;

const Wrapper = styled.button`
  height: 60px;
  width: 100%;
  border: 0px;
  outline: none;
  background-color: transparent;
`;

