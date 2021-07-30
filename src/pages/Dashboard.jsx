import React from 'react';
import styled from "styled-components";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const sidebarOpen = useSelector((state) => state.sidebar.open);
  
  return (
    <WrapperDiv className={`safeArea animate ${sidebarOpen ? "sidebarOpen" : "sidebarClosed"}`}>
      <h1 className="font25">Dashboard</h1>
    </WrapperDiv>
  );
};

export default Dashboard;

const WrapperDiv = styled.div`
  width: 100%;
`;