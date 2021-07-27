import React from 'react';
import styled, { useTheme } from "styled-components";
// Components
import Avatar from "../Other/Avatar";
import SidebarMobileItem from "../Navbar/SidebarMobileItem";
// Assets
import LogoImg from '../../assets/svg/logo';
import ArrowDot from "../../assets/svg/arrowDot";

const SidebarMobile = ({ sidebarMobileOpen, closeMobileSidebar }) => {
  const currentTheme = useTheme();
  return (
    <>
      {sidebarMobileOpen ? <BackdropDiv onClick={() => closeMobileSidebar()}></BackdropDiv> : null}
      <WrapperDiv className="animate" sidebarMobileOpen={sidebarMobileOpen}>
        <HeaderDiv className="flexSpaceCenter">
          <div className="flexNullCenter">
            <LogoDiv>
              <LogoImg color="#54FE2B" width="25" height="30" />
            </LogoDiv>
            <h1 className="font20 bold">Kraken</h1>
          </div>
          <CloseSidebarBtn className="flexCenter pointer" onClick={() => closeMobileSidebar()}>
            <ArrowDot color={currentTheme.text} />
          </CloseSidebarBtn>
        </HeaderDiv>
        <BodyDiv className="textCenter">
          <Avatar />
          <h1 className="font20 semibold" style={{ margin: "15px 0", color: currentTheme.text }}>
            Rokvic Sasa
          </h1>
          <h2 className="font13" style={{ color: currentTheme.lightText }}>
            Novi Sad, Serbia
          </h2>
          <BodyMenu>
            <div>
              <SidebarMobileItem title="Edit Profile" icon="pencil" />
              <SidebarMobileItem title="Log Out" icon="logout" />
              <BorderDiv></BorderDiv>
              <SidebarMobileItem title="Notifications" icon="bell" />
              <SidebarMobileItem title="Settins" icon="gear" />
              <SidebarMobileItem title="Dark Mode" icon="sun" withSwitch />
              <SidebarMobileItem title="Add New Game" icon="plus" />
            </div>
          </BodyMenu>
        </BodyDiv>
        <StyledP className="font13 textCenter">
          © 2021 <span className="font13">Kraken</span> ,All Right Reserved
        </StyledP>
      </WrapperDiv>
    </>
  );
};

export default SidebarMobile;

const BackdropDiv = styled.div`
  background-color: ${(props) => props.theme.body2};
  width: 100%;
  height: 100vh;
  position: fixed;
  overflow-y: auto;
  top: 0;
  left: 0;
  opacity: 0.8;
  z-index: 40;
`;
const WrapperDiv = styled.div`
  background-color: ${(props) => props.theme.sidebarBg};
  width: 80%;
  height: 100vh;
  position: fixed;
  overflow-y: auto;
  top: 0;
  z-index: 50;
  left: ${(props) => (props.sidebarMobileOpen ? "0" : "-80%")};
`;
// HEADER
const HeaderDiv = styled.div`
  width: 100%;
  height: 60px;
`;
const LogoDiv = styled.div`
  padding: 0 15px;
`;
const CloseSidebarBtn = styled.button`
  height: 100%;
  min-width: 60px;
  outline: none;
  border: 0px;
  background-color: transparent;
`;
// BODY
const BodyDiv = styled.div`
  width: 100%;
  margin: 3vh 0;
`;
const BodyMenu = styled.div`
  width: 100%;
  padding: 3vh 0;
`;
const BorderDiv = styled.div`
  background-color: ${(props) => props.theme.borderLight};
  width: calc(100% - 30px);
  margin: 20px 15px;
  height: 2px;
`;
const StyledP = styled.p`
  color: ${(props) => props.theme.lightText};
  background-color: ${(props) => props.theme.sidebarBg};
  padding: 10px 0 20px 0;
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 40;
`;