import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Librarry = () => {
  const sidebarOpen = useSelector((state) => state.sidebar.open);

  return (
    <WrapperDiv className={`safeArea animate ${sidebarOpen ? "sidebarOpen" : "sidebarClosed"}`}>
      <h1 className="font25">Librarry</h1>
    </WrapperDiv>
  );
};

export default Librarry;

const WrapperDiv = styled.div`
  width: 100%;
`;
