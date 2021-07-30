import React from 'react';
import styled, { useTheme } from "styled-components";
// Assets
import LoopImg from "../../assets/svg/loop";

const SearchInput = ({ border }) => {
  const currentTheme = useTheme();
  return (
    <>
      <BorderStyled></BorderStyled>
      <SearchInputWrapper className="flexNullCenter" style={{ border: border ? `2px solid ${currentTheme.border2}` : null }}>
        <SearchInputStyled className="font13 regular" placeholder="Search here for games" border={border}></SearchInputStyled>
        <SearchButton className="flexCenter pointer" onClick={() => alert("pressed")}>
          <LoopImg />
        </SearchButton>
      </SearchInputWrapper>
    </>
  );
};

export default SearchInput;

const BorderStyled = styled.div`
  height: 34px;
  width: 1px;
  margin-right: 25px;
  background-color: ${(props) => props.theme.border};
  @media (min-width: 990px) {
    display: none;
  }
`;
const SearchInputWrapper = styled.div`
  height: 50px;
  width: 100%;
  background-color: transparent;
  border-radius: 10px;
  outline: none;
  color: ${(props) => props.theme.green};
  font-family: "Rajdhani-SemiBold";
  ::placeholder {
    color: ${(props) => props.theme.lightText};
  }
`;
const SearchInputStyled = styled.input`
  width: 100%;
  height: 100%;
  border: 0px;
  background-color: transparent;
  padding: ${(props) => (props.border ? "0 0 0 20px" : "0 20px")};
  outline: none;
  color: ${(props) => props.theme.green};
  font-family: "Rajdhani-SemiBold";
  ::placeholder {
    color: ${(props) => props.theme.lightText};
  }
`;
const SearchButton = styled.button`
  height: 100%;
  width: 60px;
  border: 0px;
  outline: none;
  padding: 0 15px;
  background-color: transparent;
`;