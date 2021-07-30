import React from "react";
import styled, { useTheme } from "styled-components";
// Assets
import GearIcon from "../../assets/svg/gearIcon";

const Settings = () => {
  const currentTheme = useTheme();
  return (
    <Wrapper className="flexCenter">
      <InnerWrapper className="relative flexCenter pointer">
        <GearIcon color={currentTheme.white} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Settings;

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
