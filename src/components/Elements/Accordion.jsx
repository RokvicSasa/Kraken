import React, { useState, useEffect } from "react";
import styled, { keyframes, useTheme } from "styled-components";
// Assets
import Elements from "../../assets/svg/elements";
import Arrow from "../../assets/svg/arrow";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const Accordion = ({ children, color, title }) => {
  const currentTheme = useTheme();
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [body, setBody] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WrapperDiv className="relative">
      {windowDimensions.width > 576 ? (
        <>
          <BoxHeader color={color} className="flexSpaceCenter relative" desktop>
            <p className="font15 bold" style={color ? { color: currentTheme.white } : { color: currentTheme.text }}>
              {title}
            </p>
            <div></div>
            {color ? (
              <ImageWrapper>
                <Elements color="#4736aa" />
              </ImageWrapper>
            ) : null}
          </BoxHeader>
          <BoxBody color={color} desktop>
            {children}
          </BoxBody>
        </>
      ) : (
        <>
          <BoxHeader
            body={body}
            color={color}
            className="flexSpaceCenter relative pointer"
            onClick={windowDimensions.width < 576 ? () => setBody(!body) : null}
          >
            <p className="font15 bold" style={color ? { color: currentTheme.white } : { color: currentTheme.text }}>
              {title}
            </p>
            <Arrow color={color ? currentTheme.white : currentTheme.text} />
            {color ? (
              <ImageWrapper>
                <Elements color="#4736aa" />
              </ImageWrapper>
            ) : null}
          </BoxHeader>
          {body ? (
            <BoxBody body={body} color={color}>
              {children}
            </BoxBody>
          ) : null}
        </>
      )}
    </WrapperDiv>
  );
};

export default Accordion;

const dropdownOpenAnimation = keyframes`
  0% { top: -65px; }
  100% { top: 0; }
`;
const WrapperDiv = styled.div`
  width: 100%;
  margin-top: 25px;
  border-radius: 10px;
  @media (max-width: 576px) {
    margin-top: 15px;
  }
`;
const ImageWrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  z-index: 99;
`;
const BoxHeader = styled.button`
  width: 100%;
  height: 75px;
  padding: 0 20px;
  z-index: 9;
  border-bottom-left-radius: ${(props) => (props.desktop || props.body ? "0px" : "10px")};
  border-bottom-right-radius: ${(props) => (props.desktop || props.body ? "0px" : "10px")};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  outline: none;
  border: 0px;
  background-color: ${(props) => (props.color ? props.color : props.theme.sidebarBg)};
`;
const BoxBody = styled.div`
  background-color: ${(props) => (props.color ? props.color : props.theme.sidebarBg)};
  height: 210px;
  position: relative;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 10px 20px;
  border-top-left-radius: ${(props) => (props.desktop || props.body ? "0px" : "10px")};
  border-top-right-radius: ${(props) => (props.desktop || props.body ? "0px" : "10px")};
  animation-name: ${dropdownOpenAnimation};
  animation-duration: 0.3s;
  -webkit-animation: ${dropdownOpenAnimation} ${(props) => (props.desktop ? "0s" : "0.3s")} forwards;
`;