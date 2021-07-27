import React from 'react';
import styled from "styled-components";

const Switch = ({ SwitchOn }) => {
  return (
    <WrapperDiv className="flexNullCenter animate" SwitchOn={SwitchOn}>
      <InnerDiv></InnerDiv>
    </WrapperDiv>
  );
};

export default Switch;

const WrapperDiv = styled.div`
  background-color: ${(props) => (props.SwitchOn ? "#54fe2b" : "#40465A")};
  width: 36px;
  height: 21px;
  border-radius: 10px;
  padding: 0 2px;
  justify-content: ${(props) => (props.SwitchOn ? "flex-end" : "flex-start")};
`;
const InnerDiv = styled.div`
  background-color: #fff;
  width: 17px;
  height: 17px;
  border-radius: 50%;
`;