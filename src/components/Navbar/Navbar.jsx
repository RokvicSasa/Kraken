import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
// Components
import NavbarTop from "./NavbarTop";
import NavbarTopDesktop from "./NavbarTopDesktop";
import TabBar from "./TabBar";
import SidebarDesktop from "./SidebarDesktop";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const Navbar = () => {
  const token = useSelector((state) => state.user.token);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WrapperDiv>
      {token ? (
        <>
          {windowDimensions.width < 577 ? (
            <>
              <NavbarTop />
              <TabBar />
            </>
          ) : (
            <>
              <SidebarDesktop />
              <NavbarTopDesktop />
            </>
          )}
        </>
      ) : null}
    </WrapperDiv>
  );
};

export default Navbar;

const WrapperDiv = styled.div`

`;