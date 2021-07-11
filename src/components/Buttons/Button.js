import React from 'react';
import styled from "styled-components";

const Button = ({ text, action, fill }) => {
  return (
    <>
      {fill ? (
        <ButtonFill className="radius8 flexCenter animate" onClick={action ? () => action() : null}>
          <p className="font15 bold">{text}</p>
        </ButtonFill>
      ) : (
        <ButtonEmpty className="radius8 flexCenter animate" onClick={action ? () => action() : null}>
          <p className="font15 bold">{text}</p>
        </ButtonEmpty>
      )}
    </>
  );
};

export default Button;

const ButtonFill = styled.button`
  background-color: #54fe2b;
  width: 100%;
  min-height: 52px;
  color: #0d1223;
  margin: 3vh 0;
  border: 2px solid #54fe2b;
  cursor: pointer;
  &:hover {
    border: 2px solid #54fe2b;
    background-color: transparent;
    color: #fff;
  }
`;
const ButtonEmpty = styled.button`
  background-color: transparent;
  width: 100%;
  min-height: 52px;
  color: #fff;
  margin: 3vh 0;
  border: 2px solid #252b3d;
  cursor: pointer;
  &:hover {
    border: 2px solid #54fe2b;
    color: #fff;
  }
`;

