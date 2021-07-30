import React from "react";
import styled, {useTheme} from "styled-components";
// Assets
import Elements from "../../assets/svg/elements";
import GoldShield from "../../assets/svg/gold";
import PlatinumShield from "../../assets/svg/platinum";

const GameStatusBox = ({ gold, total }) => {
  const currentTheme = useTheme();
  return (
    <WrapperDiv className="flexNullCenter relative">
      <ImageWrapper>
        <Elements color={currentTheme.body} />
      </ImageWrapper>
      {gold ? <GoldShield /> : <PlatinumShield />}
      <div style={{ marginLeft: "20px" }}>
        <p className="font40 bold">{total}</p>
        <p className="font15 medium" style={{ color: currentTheme.lightText }}>
          {gold ? "Completed Games" : "Platinum Trophies"}
        </p>
      </div>
    </WrapperDiv>
  );
};

export default GameStatusBox;

const WrapperDiv = styled.div`
  width: 100%;
  height: 135px;
  border-radius: 10px;
  padding: 0 20px;
  background-color: ${(props) => props.theme.sidebarBg};
`;
const ImageWrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
`;