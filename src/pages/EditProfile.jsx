import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const EditProfile = () => {
  const sidebarOpen = useSelector((state) => state.sidebar.open);

  return (
    <WrapperDiv className={`safeArea animate ${sidebarOpen ? "sidebarOpen" : "sidebarClosed"}`}>
      <h1 className="font25">EditProfile</h1>
    </WrapperDiv>
  );
};

export default EditProfile;

const WrapperDiv = styled.div`
  width: 100%;
`;
