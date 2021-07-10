import React from 'react';
import styled from "styled-components";

const InputLabel = () => {
  return (
    <InputDiv>
      <LabelLabel className="semibold font14">Username</LabelLabel>
      <InputInput className="radius8 font15 semibold" type="text" name="name" />
    </InputDiv>
  );
};

export default InputLabel;

const InputDiv = styled.div`
  width: 100%;
  position: relative;
  margin: 35px 0;
`;

const InputInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  min-height: 60px;
  border: 2px solid #252b3d;
  background-color: #0d1223;
  color: #fff;
  padding: 0 20px;
`;
const LabelLabel = styled.label`
  position: absolute;
  top: -5px;
  left: 10px;
  z-index: 10;
  background-color: #0d1223;
  padding: 0 10px;
`;