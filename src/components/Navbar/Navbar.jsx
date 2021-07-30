import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { logout, togglePopup } from "../../redux/userSlice";
// Components
import NavbarTop from "./NavbarTop";
import NavbarTopDesktop from "./NavbarTopDesktop";
import TabBar from "./TabBar";
import SidebarDesktop from "./SidebarDesktop";
import Popup from "../Other/Popup";
import NotificationSidebar from "../Navbar/NotificationSidebar";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const Navbar = () => {
  const token = useSelector((state) => state.user.token);
  const popup = useSelector((state) => state.user.popup);
  const dispatch = useDispatch();
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
          {popup ? <Popup action={() => dispatch(logout())} action2={() => dispatch(togglePopup(false))} /> : null}
          {windowDimensions.width < 577 ? (
            <>
              <NavbarTop />
              <TabBar />
              <NotificationSidebar />
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