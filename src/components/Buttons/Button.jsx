import React from 'react';
import styled from "styled-components";

const Button = ({ text, action, fill, isLoading, color, border, bgColor }) => {
  return (
    <>
      {fill ? (
        <ButtonFill
          color={color}
          border={border}
          bgColor={bgColor}
          className="radius8 flexCenter animate pointer"
          onClick={action && !isLoading ? () => action() : null}
        >
          {isLoading ? <div className="spinner"></div> : <p className="font15 bold">{text}</p>}
        </ButtonFill>
      ) : (
        <ButtonEmpty
          color={color}
          border={border}
          bgColor={bgColor}
          className="radius8 flexCenter animate pointer"
          onClick={action && !isLoading ? () => action() : null}
        >
          {isLoading ? <div className="spinner"></div> : <p className="font15 bold">{text}</p>}
        </ButtonEmpty>
      )}
    </>
  );
};

export default Button;

const ButtonFill = styled.button`
  background-color: ${(props) => (props.bgColor ? props.bgColor : props.theme.purple)};
  width: 100%;
  min-height: 52px;
  color: ${(props) => (props.color ? props.color : props.theme.white)};
  margin: 3vh 0;
  border: 2px solid ${(props) => (props.bgColor ? props.bgColor : props.theme.purple)};
  outline: none;
  &:hover {
    color: ${(props) => (props.color ? props.color : null)};
    background-color: ${(props) => (props.bgColor ? props.bgColor : props.theme.purple)};
    border: 2px solid ${(props) => (props.bgColor ? props.bgColor : props.theme.purple)};
    filter: brightness(90%);
  }
`;
const ButtonEmpty = styled.button`
  background-color: transparent;
  width: 100%;
  min-height: 52px;
  color: ${(props) => (props.color ? props.color : props.theme.white)};
  margin: 3vh 0;
  border: 2px solid ${(props) => (props.border ? props.border : props.theme.purple)};
  outline: none;
  &:hover {
    border: 2px solid ${(props) => (props.border ? props.border : props.theme.purple)};
    color: ${(props) => (props.color ? props.color : props.theme.white)};
    filter: brightness(90%);
  }
`;

