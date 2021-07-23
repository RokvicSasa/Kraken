import React from 'react';
import styled from "styled-components";

const Button = ({ text, action, fill, isLoading }) => {
  return (
    <>
      {fill ? (
        <ButtonFill className="radius8 flexCenter animate" onClick={action && !isLoading ? () => action() : null}>
          {isLoading ? <div className="spinner"></div> : <p className="font15 bold">{text}</p>}
        </ButtonFill>
      ) : (
        <ButtonEmpty className="radius8 flexCenter animate" onClick={action && !isLoading ? () => action() : null}>
          {isLoading ? <div className="spinner"></div> : <p className="font15 bold">{text}</p>}
        </ButtonEmpty>
      )}
    </>
  );
};

export default Button;

const ButtonFill = styled.button`
  background-color: #5147bd;
  width: 100%;
  min-height: 52px;
  color: #fff;
  margin: 3vh 0;
  border: 2px solid #4e4ac8;
  cursor: pointer;
  &:hover {
    background-color: #615dfa;
    border: 2px solid #615dfa;
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
    border: 2px solid #4e4ac8;
    color: #fff;
  }
`;

