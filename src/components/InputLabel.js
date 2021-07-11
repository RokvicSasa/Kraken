import React, {useState} from 'react';
import styled from "styled-components";
// Svg-s
import EyeClosedIcon from "../assets/svg/eye-closed";
import EyeOpenIcon from "../assets/svg/eye-open";


const InputLabel = ({ placeholder, darkMode, type, value, setValue }) => {
  // Dark Mode prop is added on inputs where dark mode is persistent like Login page and register
  // If type prop is "password" hide/show eye button is automaticly added

  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <InputDiv>
      {value && value.length > 0 ? <LabelLabel className="semibold font14 moveLabelUp">{placeholder}</LabelLabel> : null}
      <InputInput
        style={{ padding: type === "password" ? "0 50px 0 20px" : "0 20px" }}
        className="radius8 font15 semibold"
        type={type === "password" && passwordVisible ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {type === "password" ? (
        <EyeWrapperBtn onClick={() => setPasswordVisible((passwordVisible) => !passwordVisible)} className="flexCenter">
          {passwordVisible ? <EyeClosedIcon /> : <EyeOpenIcon />}
        </EyeWrapperBtn>
      ) : null}
    </InputDiv>
  );
};

const InputDiv = styled.div`
  width: 100%;
  position: relative;
  margin: 22px 0;
`;
const InputInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  min-height: 56px;
  border: 2px solid #252b3d;
  color: #fff;
  background-color: #0d1223;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #fff;
  }
  :-ms-input-placeholder {
    color: #fff;
  }
  outline: none;
  &:focus {
    background-color: #0d1223;
    border: 2px solid #54fe2b;
  }
`;
const LabelLabel = styled.label`
  position: absolute;
  top: -5px;
  left: 10px;
  z-index: 10;
  background-color: #0d1223;
  padding: 0 10px;
  color: #54fe2b;
`;
const EyeWrapperBtn = styled.button`
  background-color: transparent;
  padding: 22px 15px;
  position: absolute;
  right: 0px;
  top: 0px;
  border: 0px;
  cursor: pointer;
`;

export default InputLabel;