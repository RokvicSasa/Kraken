import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Gallery = () => {
  const sidebarOpen = useSelector((state) => state.sidebar.open);

  return (
    <WrapperDiv className={`safeArea animate ${sidebarOpen ? "sidebarOpen" : "sidebarClosed"}`}>
      <h1 className="font25">Gallery</h1>
    </WrapperDiv>
  );
};

export default Gallery;

const WrapperDiv = styled.div`
  width: 100%;
`;
