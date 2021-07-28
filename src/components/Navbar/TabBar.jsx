import React from 'react';
import styled from "styled-components";
// Components
import TabBarItem from "./TabBarItem";

const TabBar = () => {
  return (
    <WrapperDiv>
      <UlWrap className="flexSpaceCenter">
        <ListWraper>
          <TabBarItem icon="dashboard" path="/" />
        </ListWraper>
        <ListWraper>
          <TabBarItem icon="librarry" path="/librarry" />
        </ListWraper>
        <ListWraper>
          <TabBarItem icon="gallery" path="/gallery" />
        </ListWraper>
        <ListWraper>
          <TabBarItem icon="news" path="/news" />
        </ListWraper>
        <ListWraper>
          <TabBarItem icon="about" path="/about" />
        </ListWraper>
      </UlWrap>
    </WrapperDiv>
  );
};

export default TabBar;

const WrapperDiv = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 30;
  background-color: ${(props) => props.theme.tabbar}
`;
const UlWrap = styled.ul`
  width: 100%;
  height: 100%;
`;
const ListWraper = styled.li`
  width: 20%;
  height: 100%;
`;