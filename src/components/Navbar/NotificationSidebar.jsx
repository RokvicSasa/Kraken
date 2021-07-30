import React from "react";
import styled, { useTheme } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { closeNotification } from "../../redux/sidebarSlice";
// Components
import Backdrop from "../../components/Other/Backdrop";
import EmptyNotification from "../../components/Other/EmptyNotification";
// Assets
import CloseIcon from "../../assets/svg/close";

const SidebarMobile = () => {
  const dispatch = useDispatch();
  const currentTheme = useTheme();
  const sidebarStatus = useSelector((state) => state.sidebar.notificationOpen);
  return (
    <>
      {sidebarStatus ? <Backdrop action={() => dispatch(closeNotification())}></Backdrop> : null}
      <WrapperDiv className="animate" sidebarStatus={sidebarStatus}>
        <Header className="relative">
          <CloseButton className="pointer" onClick={() => dispatch(closeNotification())}>
            <CloseIcon color={currentTheme.white} />
          </CloseButton>
        </Header>
        <EmptyNotification />
      </WrapperDiv>
    </>
  );
};

export default SidebarMobile;

const WrapperDiv = styled.div`
  background-color: ${(props) => props.theme.sidebarBg};
  width: 70%;
  height: 100vh;
  position: fixed;
  overflow-y: auto;
  top: 0;
  right: 0;
  z-index: 999;
  right: ${(props) => (props.sidebarStatus ? "0" : "-70%")};
`;
const Header = styled.div`
  width: 100%;
  height: 60px;
`;
const CloseButton = styled.button`
  height: 100%;
  padding: 0 20px;
  max-height: 60px;
  outline: none;
  border: 0px;
  position: absolute;
  background-color: transparent;
  top: 0;
  left: 0;
`;