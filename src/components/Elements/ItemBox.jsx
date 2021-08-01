import React from "react";
import styled from "styled-components";
// Assets
import PlatinumShield from "../../assets/svg/platinum";
import StarIcon from "../../assets/svg/star";

const ItemBox = ({ game }) => {
  return (
    <Wrapper className="relative">
      <Inner>
        <ImgContainer>
          <ImgWrapper src={game.Poster ? game.Poster : null} alt="poster" />
        </ImgContainer>
        <TitleWrapper className="flexSpaceCenter">
          <Title className="font15">{game.Title ? game.Title : null}</Title>
          {game.Platinum ? game.Platinum ? <PlatinumShield width="23" height="23" /> : <div style={{ width: "5px", height: "23px" }}></div> : null}
        </TitleWrapper>
        <InfoWrapper className="flexSpaceCenter">
          <Year className="font15 relative">{game.Release ? game.Release.substring(0, 4) : null}</Year>
          <div className="flexNullCenter">
            <StarIcon />
            <Rating className="font30 medium relative">
              {game.Rating ? game.Rating.toString().substring(0, 1) : null}
              <span className="font20 medium">{game.Rating ? game.Rating.toString().substring(1, 3) : null}</span>
            </Rating>
          </div>
        </InfoWrapper>
      </Inner>
    </Wrapper>
  );
};

export default ItemBox;

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
`;
const Inner = styled.div`
  width: 100%;
  height: 100%;
`;
const ImgContainer = styled.div`
  width: 100%;
  height: 210px;
`;
const ImgWrapper = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;
const TitleWrapper = styled.div`
  width: 100%;
  padding: 8px 0 5px 0;
`;
const Title = styled.h1`
  text-overflow: ellipsis;
  overflow: hidden;
  padding-right: 5px;
  white-space: nowrap;
`;
const InfoWrapper = styled.div`
  width: 100%;
`;
const Year = styled.p`
  color: ${(props) => props.theme.lightText};
  top: 3px;
`;
const Rating = styled.h1`
  color: ${(props) => props.theme.text};
  top: -1px;
  margin-left: 10px;
`;


