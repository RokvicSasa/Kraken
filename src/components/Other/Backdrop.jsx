import React from 'react';
import styled from "styled-components";

const Backdrop = ({ transparent, action }) => {
  return <Wrapper transparent={transparent} onClick={action ? () => action() : null}></Wrapper>;
};

export default Backdrop;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999!important;
  opacity: ${(props) => (props.transparent ? "0" : "0.6")};
  background-color: ${(props) => props.theme.navbar};
`;