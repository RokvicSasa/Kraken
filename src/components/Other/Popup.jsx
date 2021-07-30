import React from 'react';
import styled, { useTheme } from "styled-components";
// Components
import Button from "../Buttons/Button";
import Backdrop from "../Other/Backdrop";
// Assets
import LogoIcon from '../../assets/svg/logo';
import CloseIcon from "../../assets/svg/close";

const Popup = ({action, action2}) => {
  const currentTheme = useTheme();

  return (
    <Wrapper className="flexCenter">
      <Backdrop />
      <PopupDiv className="flexSpaceCenter flexColumn relative">
        <CloseButton className="flexCenter pointer" onClick={action2}>
          <CloseIcon color={currentTheme.dark} />
        </CloseButton>
        <LogoIcon width="47" height="60" color={currentTheme.green} />
        <StyledP className="font15 medium">Are you sure you want to log out?</StyledP>
        <ButtonRow className="flexNullCenter">
          <ButtonBox>
            <Button text="Logout" fill bgColor={currentTheme.main} color={currentTheme.dark} action={action} />
          </ButtonBox>
          <ButtonBox>
            <Button
              text="Cancel"
              color={currentTheme.dark}
              border={currentTheme.softGrey}
              bgColor={currentTheme.main}
              action={action2}
            />
          </ButtonBox>
        </ButtonRow>
      </PopupDiv>
    </Wrapper>
  );
};

export default Popup;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 999;
  top: 0px;
  left: 0px;
`;
const PopupDiv = styled.div`
  background-color: ${(props) => props.theme.white};
  z-index: 9999;
  padding: 30px 20px 0px 20px;
  border-radius: 10px;
  min-width: 320px;
`;
const StyledP = styled.p`
  color: ${(props) => props.theme.dark};
  margin: 20px 0 0 0;
`;
const ButtonRow = styled.div`
  width: 100%;
`;
const ButtonBox = styled.div`
  width: 100%;
  margin: 0 5px;
`;
const CloseButton = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 20px;
  position: absolute;
  top: 0;
  right: 0;
`;