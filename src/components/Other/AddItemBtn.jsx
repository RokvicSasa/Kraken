import React from "react";
import styled, { useTheme } from "styled-components";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// Assets
import AddItemFill from "../../assets/svg/addItemFill";

const AddItemBtn = () => {
  const currentTheme = useTheme();
  const theme = useSelector((state) => state.darkMode.darkMode);
  const sidebarOpen = useSelector((state) => state.sidebar.open);

  return (
    <Wrapper className="flexNullCenter pointer">
      <StyledLink className="flexNullCenter pointer" to="/addgame" exact activeStyle={{ backgroundColor: currentTheme.body }}>
        <IconWrapper>
          <AddItemFill color={currentTheme.main} color2={theme === "dark" ? currentTheme.navbar : currentTheme.sidebarBg} />
        </IconWrapper>
        {sidebarOpen ? <MenuText className="font15 semibold">Add Game</MenuText> : null}
      </StyledLink>
    </Wrapper>
  );
};

export default AddItemBtn;

const Wrapper = styled.button`
  height: 60px;
  margin: 10px auto;
  width: 100%;
  border: 0px;
  outline: none;
  background-color: transparent;
`;
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
  width: 70px;
`;
const MenuText = styled.p`
  margin-left: 5px;
  color: ${(props) => props.theme.sidebarColor};
`;