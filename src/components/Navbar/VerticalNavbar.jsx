import React from "react";
import styled from "styled-components";
// Components
import TabBarItem from "./TabBarItem";

const TabBar = () => {
  return (
    <WrapperDiv>
      <UlWrap className="flexSpaceCenter flexColumn">
        <ListWraper>
          <TabBarItem icon="dashboard" path="/" vertical />
        </ListWraper>
        <ListWraper>
          <TabBarItem icon="librarry" path="/librarry" vertical />
        </ListWraper>
        <ListWraper>
          <TabBarItem icon="gallery" path="/gallery" vertical />
        </ListWraper>
        <ListWraper>
          <TabBarItem icon="news" path="/news" vertical />
        </ListWraper>
        <ListWraper>
          <TabBarItem icon="about" path="/about" vertical />
        </ListWraper>
      </UlWrap>
    </WrapperDiv>
  );
};

export default TabBar;

const WrapperDiv = styled.div`
  width: 100%;
  z-index: 30;
`;
const UlWrap = styled.ul`
  width: 100%;
  overflow-y: auto;
`;
const ListWraper = styled.li`
  width: 80px;
  height: 70px;
  margin: 5px 0;
`;
