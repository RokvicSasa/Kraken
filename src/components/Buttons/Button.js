import React from 'react';
import styled from "styled-components";

const Button = () => {
  return (
    <ButtonWrap className="radius8 flexCenter" onClick={() => console.log('hey')}>
      <P className="font15 bold">LOGIN</P>
    </ButtonWrap>
  );
};

export default Button;

const ButtonWrap = styled.button`
  background-color: #54fe2b;
  width: 100%;
  min-height: 60px;
  color: #fff;
  margin: 3vh 0;
  border: 2px solid #252b3d;
  cursor: pointer;
`;
const P = styled.p`
  color: #0d1223;
`;


