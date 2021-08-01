import React, { useState, useEffect } from "react";
import styled from "styled-components";
// Assets
import AdventureIcon from "../../assets/svg/genres/adventure";

const GenreBox = ({ genre }) => {
  const [ gameCount, setGameCount ] = useState(null);

  useEffect(() => {
    if (genre) {
      console.log("genre count is started");
      setGameCount(genre.games.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genre]);


  return (
    <Wrapper className="relative">
      <Inner className="flexNullCenter">
        <IconContainer className="flexCenter">
          <AdventureIcon />
        </IconContainer>
        <Info>
          <Title className="font15 medium">{genre ? genre.Name : null}</Title>
          <Subtitle className="font12">{gameCount ? gameCount : 0} Games</Subtitle>
        </Info>
      </Inner>
    </Wrapper>
  );
};

export default GenreBox;

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
`;
const Inner = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80px;
  background-color: ${(props) => props.theme.body2};
  border-radius: 10px;
`;
const IconContainer = styled.div`
  width: 40%;
  height: 100%;
`;
const Info = styled.div`
  width: 60%;
  height: 100%;
  padding-left: 2%;
`;
const Title = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const Subtitle = styled.p`
  color: ${(props) => props.theme.lightText};
  margin-top: 6px;
`;