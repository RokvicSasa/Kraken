import React from 'react';
import styled from "styled-components";
// Assets
import AvatarImg from "../../assets/img/avatar.png";

const Avatar = () => {
  return (
    <AvatarWrapperDiv>
      <AvatarImgWrap src={AvatarImg} alt="background" />
      <StatusDiv></StatusDiv>
    </AvatarWrapperDiv>
  );
};

export default Avatar;

const AvatarWrapperDiv = styled.div`
  padding: 10px;
  width: 88px;
  height: 88px;
  margin: 0 auto;
  position: relative;
`;
const AvatarImgWrap = styled.img`
  width: 68px;
  height: 68px;
  border-radius: 10px;
`;
const StatusDiv = styled.div`
  background-color: #54fe2b;
  border: 6px solid ${(props) => props.theme.sidebarBg};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
`;