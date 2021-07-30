import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const News = () => {
  const sidebarOpen = useSelector((state) => state.sidebar.open);

  return (
    <WrapperDiv className={`safeArea animate ${sidebarOpen ? "sidebarOpen" : "sidebarClosed"}`}>
      <h1 className="font25">News</h1>
    </WrapperDiv>
  );
};

export default News;

const WrapperDiv = styled.div`
  width: 100%;
`;
