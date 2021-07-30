import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
// Components
import TabBarItem from "./TabBarItem";

const TabBar = () => {
  const sidebarOpen = useSelector((state) => state.sidebar.open);
  return (
    <WrapperDiv>
      <UlWrap className="flexSpaceCenter flexColumn">
        <ListWraper open={sidebarOpen}>
          <TabBarItem icon="dashboard" path="/" vertical title="Dashboard" />
        </ListWraper>
        <ListWraper open={sidebarOpen}>
          <TabBarItem icon="librarry" path="/librarry" vertical title="Librarry" />
        </ListWraper>
        <ListWraper open={sidebarOpen}>
          <TabBarItem icon="gallery" path="/gallery" vertical title="Gallery" />
        </ListWraper>
        <ListWraper open={sidebarOpen}>
          <TabBarItem icon="news" path="/news" vertical title="News" />
        </ListWraper>
        <ListWraper open={sidebarOpen}>
          <TabBarItem icon="about" path="/about" vertical title="About" />
        </ListWraper>
      </UlWrap>
    </WrapperDiv>
  );
};

export default TabBar;

const WrapperDiv = styled.div`
  width: 100%;
  z-index: 30;
  overflow-x: hidden;
`;
const UlWrap = styled.ul`
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;
const ListWraper = styled.li`
  width: ${(props) => (props.open ? "220px" : "80px")};
  height: 70px;
  margin: 5px 0;
  overflow-x: hidden;
`;
