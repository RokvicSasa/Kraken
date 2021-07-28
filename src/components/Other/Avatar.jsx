import React from 'react';
import styled from "styled-components";
// Assets
import AvatarImg from "../../assets/img/avatar.png";

const Avatar = ({ small }) => {
  return (
    <AvatarWrapperDiv small={small} className="flexCenter pointer">
      <AvatarImgWrap small={small} src={AvatarImg} alt="background" />
      <StatusDiv small={small}></StatusDiv>
    </AvatarWrapperDiv>
  );
};

export default Avatar;

const AvatarWrapperDiv = styled.button`
  width: ${(props) => (props.small ? "80px" : "88px")};
  height: ${(props) => (props.small ? "80px" : "88px")};
  margin: 0 auto;
  position: relative;
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
  background-color: #54fe2b;
  border: 6px solid ${(props) => (props.small ? props.theme.navbar : props.theme.sidebarBg)};
  width: ${(props) => (props.small ? "25px" : "30px")};
  height: ${(props) => (props.small ? "25px" : "30px")};
  border-radius: 50%;
  position: absolute;
  top: ${(props) => (props.small ? "5px" : "0")};
  right: ${(props) => (props.small ? "-8px" : "0")};
`;