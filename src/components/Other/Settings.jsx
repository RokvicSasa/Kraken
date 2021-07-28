import React from "react";
import styled from "styled-components";
// Assets
import GearIcon from "../../assets/svg/gearIcon";

const Settings = () => {
  return (
    <Wrapper className="flexCenter">
      <InnerWrapper className="relative flexCenter pointer">
        <GearIcon color="#fff" />
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
