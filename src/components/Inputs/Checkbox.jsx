import React from "react";
import styled from "styled-components";
// Svg-s
import CheckmarkIcon from "../../assets/svg/checkmark";

const Checkbox = ({ action, checked }) => {
  return (
    <WrapperDiv className="flexNullCenter" onClick={() => action()}>
      <CheckboxDiv
        className="flexCenter radius6 animate"
        style={{ backgroundColor: checked ? "#615dfa" : "transparent", border: checked ? "2px solid #615dfa" : "2px solid #252b3d" }}
      >
        {checked ? (
          <IconWrapperDiv className="flexCenter">
            <CheckmarkIcon />
          </IconWrapperDiv>
        ) : null}
      </CheckboxDiv>
      <p className="font14 semibold">Remember Me</p>
    </WrapperDiv>
  );
};

const WrapperDiv = styled.div`
  min-height: 24px;
  cursor: pointer;
`;
const CheckboxDiv = styled.button`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  cursor: pointer;
  position: relative;
  &:hover {
    border: 2px solid #615dfa!important;
  }
`;
const IconWrapperDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 20px;
  height: 20px;
`;
export default Checkbox;
