import React from "react";
import styled, { useTheme } from "styled-components";
import { useSelector } from "react-redux";
import Circle from "react-circle";
// Elements
import Accordion from "../components/Elements/Accordion";
import GameStatusBox from "../components/Elements/GameStatusBox";
import Slider from "../components/Elements/Slider";
import GenreSlider from "../components/Elements/GenreSlider";
// Assets
import Shield from "../assets/svg/shield";

const Dashboard = () => {
  const currentTheme = useTheme();
  const sidebarOpen = useSelector((state) => state.sidebar.open);
  const gamesCount = useSelector((state) => state.games.gamesCount);
  const platinumCount = useSelector((state) => state.games.platinumCount);

  return (
    <WrapperDiv className={`safeArea animate ${sidebarOpen ? "sidebarOpen" : "sidebarClosed"}`}>
      <div className="container">
        <h1 className="font20 bold">Player Overview</h1>
        <div className="row">
          <div className="col-xs-12 col-md-6 col-lg-3">
            <Accordion color={currentTheme.purple} title="Current Level">
              <div className="flexNullCenter">
                <Shield />
                <CurrentLevelWrapper>
                  <div className="flexNullCenter">
                    <p className="font12 medium" style={{ marginRight: "5px" }}>
                      Level
                    </p>
                    <p className="font20 bold">3</p>
                  </div>
                  <p className="font15 bold" style={{ margin: "15px 0" }}>
                    Conquer
                  </p>
                  <p className="font12 medium">13.625 TOTAL EXP</p>
                </CurrentLevelWrapper>
              </div>
              <div className="flexSpaceCenter" style={{ margin: "20px 0" }}>
                <p className="font12 medium" style={{ color: currentTheme.white }}>
                  Level 3
                </p>
                <p className="font12 medium" style={{ color: currentTheme.white }}>
                  58%
                </p>
              </div>
              <ProgressBar>
                <InnerBar></InnerBar>
              </ProgressBar>
            </Accordion>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <Accordion title="Progress">
              <div className="flexCenter relative" style={{ top: "-10px" }}>
                <Circle
                  size={120}
                  lineWidth={50}
                  progress={platinumCount && gamesCount ? (100 * platinumCount) / gamesCount : null}
                  progressColor={currentTheme.green}
                  bgColor={currentTheme.purple}
                  textColor={currentTheme.text}
                  textStyle={{
                    font: "bold 7rem 'Rajdhani-Medium'",
                  }}
                  roundedStroke={true}
                />
              </div>
              <div className="flexNullCenter flexColumn">
                <div className="flexNullCenter" style={{ margin: "20px 0 10px 0" }}>
                  <CircleDiv></CircleDiv>
                  <p className="font12 medium" style={{ margin: "0 10px" }}>
                    Platinum Trophies
                  </p>
                  <p className="font15 medium" style={{ color: currentTheme.green }}>
                    {platinumCount ? platinumCount : null}
                  </p>
                </div>
                <div className="flexNullCenter">
                  <CircleDiv2></CircleDiv2>
                  <p className="font12 medium" style={{ margin: "0 10px" }}>
                    Completed Games
                  </p>
                  <p className="font15 medium" style={{ color: currentTheme.green }}>
                    {gamesCount ? gamesCount : null}
                  </p>
                </div>
              </div>
            </Accordion>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <Accordion title="Gallery 64">
              <div className="flexSpaceCenter">
                <ImgBox className="flexCenter">2</ImgBox>
                <ImgBox className="flexCenter">2</ImgBox>
                <ImgBox className="flexCenter">2</ImgBox>
                <ImgBox className="flexCenter">2</ImgBox>
              </div>
              <div className="flexSpaceCenter">
                <ImgBox className="flexCenter">2</ImgBox>
                <ImgBox className="flexCenter">2</ImgBox>
                <ImgBox className="flexCenter">2</ImgBox>
                <ImgBox className="flexCenter">2</ImgBox>
              </div>
              <div className="flexSpaceCenter">
                <ImgBox className="flexCenter">2</ImgBox>
                <ImgBox className="flexCenter">2</ImgBox>
                <ImgBox className="flexCenter">2</ImgBox>
                <ImgBox className="flexCenter">2</ImgBox>
              </div>
            </Accordion>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <GameStatusDiv>
              <div style={{ marginBottom: "15px" }}>
                <GameStatusBox gold total={gamesCount ? gamesCount : null} />
              </div>
              <GameStatusBox total={platinumCount ? platinumCount : null} />
            </GameStatusDiv>
          </div>
        </div>
      </div>
      <SliderWrapper className="container">
        <SliderSubitle className="font15">EXPLORE GAMES</SliderSubitle>
        <SliderTitle className="font20 bold">Browse Completed Games</SliderTitle>
        <Slider />
      </SliderWrapper>
      <SliderWrapper className="container">
        <SliderSubitle className="font15">EXPLORE GNERES</SliderSubitle>
        <SliderTitle className="font20 bold">Browse Games By Category</SliderTitle>
        <GenreSlider />
      </SliderWrapper>
    </WrapperDiv>
  );
};

export default Dashboard;

const WrapperDiv = styled.div`
  width: 100%;
`;
const CurrentLevelWrapper = styled.div`
  padding-left: 10%;
  p {
    color: ${(props) => props.theme.white}
  }
`;
const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${(props) => props.theme.darkPurple};
  border-radius: 5px;
`;
const InnerBar = styled.div`
  width: 52%;
  height: 8px;
  background-color: ${(props) => props.theme.green};
  border-radius: 5px;
`;
const CircleDiv = styled.div`
  width: 11px;
  height: 11px;
  background-color: ${(props) => props.theme.green};
  border-radius: 50%;
`;
const CircleDiv2 = styled.div`
  width: 11px;
  height: 11px;
  background-color: ${(props) => props.theme.purple};
  border-radius: 50%;
`;
const ImgBox = styled.div`
  background-color: #5147bd;
  width: 53px;
  height: 53px;
  border-radius: 10px;
  margin-bottom: 10px;
`;
const GameStatusDiv = styled.div`
  width: 100%;
  height: 135px;
  margin: 25px 0;
  border-radius: 10px;
  @media (max-width: 576px) {
    margin: 15px 0;
  }
`;
const SliderWrapper = styled.div`
  padding: 20px !important;
  @media (max-width: 576px) {
    padding: 5px !important;
  }
`;
const SliderTitle = styled.h1`
  padding: 10px;
`;
const SliderSubitle = styled.p`
  color: ${(props) => props.theme.lightText};
  padding: 0 10px;
`;

