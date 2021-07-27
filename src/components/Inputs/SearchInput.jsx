import React from 'react';
import styled from "styled-components";

const SearchInput = () => {
  return <SearchInputWrapper className="font13 regular" placeholder="Search here for games"></SearchInputWrapper>;
};

export default SearchInput;

const SearchInputWrapper = styled.input`
  height: 34px;
  width: 100%;
  border: 0px;
  border-left: 1px solid ${(props) => props.theme.border};
  background-color: transparent;
  padding: 0 20px;
  outline: none;
  color: #54fe2b;
  font-family: "Rajdhani-SemiBold";
  ::placeholder {
    color: ${(props) => props.theme.lightText};
  }
`;