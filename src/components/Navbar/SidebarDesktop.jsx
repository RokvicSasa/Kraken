import React from "react";
import styled, { useTheme } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../redux/sidebarSlice";
import { togglePopup } from "../../redux/userSlice";
// Components
import LogoutBtn from "../Other/LogoutBtn";
import AddItemBtn from "../Other/AddItemBtn";
import VerticalNavbar from "../Navbar/VerticalNavbar";
// Assets
import BurgerIcon from "../../assets/svg/burger";

const SidebarDesktop = () => {
  const currentTheme = useTheme();
  const dispatch = useDispatch();
  const sidebarOpen = useSelector((state) => state.sidebar.open);

  return (
    <WrapperDiv className="flexColumn animate" sidebarOpen={sidebarOpen}>
      <BurgerWrapper className="flexNullCenter pointer" onClick={() => dispatch(toggleSidebar())}>
        <BurgerIconWrapper>
          <BurgerIcon color={currentTheme.sidebarColor} />
        </BurgerIconWrapper>
        {sidebarOpen ? <BurgerText className="font15 semibold">Menu</BurgerText> : null}
      </BurgerWrapper>
      <NavWrapper>
        <VerticalNavbar />
      </NavWrapper>
      <BottomWrapper>
        <AddItemBtn />
        <LogoutBtn action={() => dispatch(togglePopup(true))} />
      </BottomWrapper>
    </WrapperDiv>
  );
};

export default SidebarDesktop;

const WrapperDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 80px;
  z-index: 50;
  width: ${(props) => (props.sidebarOpen ? "220px" : "80px")};
  height: 100vh;
  background-color: ${(props) => props.theme.sidebarBg};
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  justify-content: space-between;
`;
const BurgerWrapper = styled.button`
  width: 100%;
  height: 60px;
  border: 0px;
  outline: none;
  background-color: transparent;
  overflow-x: hidden;
`;
const NavWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`;
const BottomWrapper = styled.div`
  width: 100%;
`;
const BurgerIconWrapper = styled.div`
  width: 80px;
`;
const BurgerText = styled.p`
  color: ${(props) => props.theme.sidebarColor};
`;