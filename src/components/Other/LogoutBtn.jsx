import React from "react";
import styled, { useTheme } from "styled-components";
import { useSelector } from "react-redux";
// Assets
import LogoutIcon from "../../assets/svg/logoutIcon";

const LogoutBtn = ({ action }) => {
  const currentTheme = useTheme();
  const sidebarOpen = useSelector((state) => state.sidebar.open);
  
  return (
    <Wrapper className="flexNullCenter pointer" onClick={action ? () => action() : null}>
      <IconWrapper>
        <LogoutIcon color={currentTheme.sidebarColor} />
      </IconWrapper>
      {sidebarOpen ? <MenuText className="font15 semibold">Logout</MenuText> : null}
    </Wrapper>
  );
};

export default LogoutBtn;

const Wrapper = styled.button`
  height: 70px;
  margin: 10px 0;
  width: 100%;
  border: 0px;
  outline: none;
  background-color: transparent;
`;
const IconWrapper = styled.div`
  width: 80px;
`;
const MenuText = styled.p`
  margin-left: 5px;
  color: ${(props) => props.theme.sidebarColor};
`;