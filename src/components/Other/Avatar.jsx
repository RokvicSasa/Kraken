import React, { useState } from "react";
import styled, { useTheme, keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { togglePopup } from "../../redux/userSlice";
import { API_ENDPOINT } from "../../helpers/Api";
// Components
import Backdrop from "../Other/Backdrop";
// Assets
import Arrow from "../../assets/svg/arrow";

const Avatar = ({ small }) => {
  const currentTheme = useTheme();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [ showDropdown, setShowDropdown ] = useState(false);

  return (
    <Wrapper className="relative flexNullCenter" onClick={small ? () => setShowDropdown(!showDropdown) : null}>
      <AvatarWrapperDiv small={small} className={`flexCenter relative ${small ? "pointer" : null}`}>
        <AvatarImgWrap small={small} src={API_ENDPOINT + user.avatar?.formats?.thumbnail?.url} alt="background" />
        <StatusDiv small={small}></StatusDiv>
        <ArrowWrapper showDropdown={showDropdown} className="animate">
          <Arrow color={currentTheme.white} />
        </ArrowWrapper>
      </AvatarWrapperDiv>
      {showDropdown ? (
        <>
          <Backdrop transparent action={() => setShowDropdown(false)} />
          <Dropdown showDropdown={showDropdown}>
            <DropdownInner>
              <StyledLink to="./editprofile" exact className="flexNullCenter animate pointer">
                <p className="font15 medium">Edit Profile</p>
              </StyledLink>
              <StyledBtn className="flexNullCenter animate pointer" onClick={() => dispatch(togglePopup(true))}>
                <p className="font15 medium">Logout</p>
              </StyledBtn>
            </DropdownInner>
          </Dropdown>
        </>
      ) : null}
    </Wrapper>
  );
};

export default Avatar;

const dropdownOpenAnimation = keyframes`
  0% { top: 18px; }
  100% { top: 58px; }
`;
const Wrapper = styled.div`
  height: ${(props) => (props.small ? "60px" : "80px")};
  margin: 0 auto;
  background-color: transparent;
`;
const AvatarWrapperDiv = styled.button`
  height: ${(props) => (props.small ? "60px" : "80px")};
  margin: 0 auto;
  border: 0px;
  outline: none;
  background-color: transparent;
`;
const AvatarImgWrap = styled.img`
  width: ${(props) => (props.small ? "53px" : "68px")};
  height: ${(props) => (props.small ? "53px" : "68px")};
  border-radius: 10px;
`;
const StatusDiv = styled.div`
  background-color: ${(props) => props.theme.green};
  border: 6px solid ${(props) => (props.small ? props.theme.navbar : props.theme.sidebarBg)};
  width: ${(props) => (props.small ? "25px" : "30px")};
  height: ${(props) => (props.small ? "25px" : "30px")};
  border-radius: 50%;
  position: absolute;
  top: ${(props) => (props.small ? "-5px" : "-10px")};
  left: ${(props) => (props.small ? "40px" : "55px")};
`;
const ArrowWrapper = styled.div`
  margin-left: 25px;
  width: 15px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transform: ${(props) => (props.showDropdown ? "rotate(-180deg)" : null)};
  @media (max-width: 900px) {
    display: none;
  }
`;
const Dropdown = styled.div`
  width: 190px;
  position: absolute;
  animation-name: ${dropdownOpenAnimation};
  animation-duration: 0.3s;
  -webkit-animation: ${dropdownOpenAnimation} 0.3s forwards;
  right: 0;
  padding: 30px 0;
  z-index: 9999;
`;
const DropdownInner = styled.div`
  background-color: ${(props) => props.theme.navbar};
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 10px;
`;
const StyledLink = styled(NavLink)`
  width: 100%;
  padding: 15px 20px;
  margin: 10px 0;
  color: ${(props) => props.theme.white};
  :hover {
    color: ${(props) => props.theme.green};
  }
`;
const StyledBtn = styled.button`
  padding: 15px 20px;
  margin: 10px 0;
  width: 100%;
  color: ${(props) => props.theme.white};
  border: 0px;
  outline: none;
  background-color: transparent;
  :hover {
    color: ${(props) => props.theme.green};
  }
`;