import React from "react";
import styled, { useTheme } from "styled-components";
// Assets
import BellIcon from "../../assets/svg/bellIcon";

const Notifications = () => {
  const currentTheme = useTheme();
  return (
    <Wrapper className="flexCenter">
      <InnerWrapper className="relative flexCenter pointer">
        <NotificationCounter className="font13 bold" style={{ border: `3px solid ${currentTheme.navbar}` }}>
          1
        </NotificationCounter>
        <BellIcon width={22} height={24} color="#fff" />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Notifications;

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
  color: #fff;
  background-color: red;
  border-radius: 50%;
  position: absolute; 
  top: 0;
  right: 0;
`;