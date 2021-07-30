import React, { useState } from "react";
import styled, { useTheme, keyframes } from "styled-components";
// Components
import Backdrop from "./Backdrop";
import EmptyNotification from "./EmptyNotification";
// Assets
import BellIcon from "../../assets/svg/bellIcon";

const Notifications = () => {
  const currentTheme = useTheme();
  const [notificationCount] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  
  return (
    <Wrapper className="flexCenter relative">
      <InnerWrapper className="relative flexCenter pointer" onClick={() => setShowDropdown(true)}>
        {notificationCount > 0 ? (
          <NotificationCounter className="font13 bold" style={{ border: `3px solid ${currentTheme.navbar}` }}>
            {notificationCount}
          </NotificationCounter>
        ) : null}
        <BellIcon width={22} height={24} color={currentTheme.white} />
      </InnerWrapper>
      {showDropdown ? (
        <>
          <Backdrop transparent action={() => setShowDropdown(false)} />
          <Dropdown showDropdown={showDropdown}>
            <DropdownInner>{notificationCount < 1 ? <EmptyNotification /> : null}</DropdownInner>
          </Dropdown>
        </>
      ) : null}
    </Wrapper>
  );
};

export default Notifications;

const dropdownOpenAnimation = keyframes`
  0% { top: 0px; }
  100% { top: 40px; }
`;
const Wrapper = styled.div`
  height: 100%;
  margin: 0 15px;
`;
const InnerWrapper = styled.button`
  padding: 10px;
  border: 0px;
  outline: none;
  background-color: transparent;
`;
const NotificationCounter = styled.div`
  width: 22px;
  height: 22px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.red};
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
`;
const Dropdown = styled.div`
  width: 300px;
  min-height: 300px;
  position: absolute;
  animation-name: ${dropdownOpenAnimation};
  animation-duration: 0.3s;
  -webkit-animation: ${dropdownOpenAnimation} 0.3s forwards;
  right: 0;
  padding: 30px 0px;
  z-index: 9999;
`;
const DropdownInner = styled.div`
  background-color: ${(props) => props.theme.navbar};
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 20px;
`;
