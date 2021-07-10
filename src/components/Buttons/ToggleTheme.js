import React from 'react'
import styled from "styled-components"

const Toggle = ({ toggleTheme }) => {
    return (
        <Button onClick={toggleTheme} >
          Switch Theme
        </Button>
    );
};

const Button = styled.button`
  background: ${(props) => props.theme.background};
  border: 0px;
  color: #fff;
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
`;

export default Toggle;