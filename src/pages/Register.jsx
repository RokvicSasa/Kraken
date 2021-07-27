import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Svg-s
import Logo from "../assets/svg/logo";
// Img-s
import AuthBg from "../assets/img/auth-bg.png";
// Components
import InputLabel from "../components/Inputs/InputLabel.jsx";
import Button from "../components/Buttons/Button.jsx";

const Login = ({ setUserLoggedIn }) => {
  let history = useHistory();
  let location = useLocation();


  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPpassword, setRepeatPassword] = useState("");

  let { from } = location.state || { from: { pathname: "/" } };
  let register = () => {
    setUserLoggedIn(true);

    history.replace(from);

  };

  return (
    <div className="container flexSpaceCenter">
      <LogoOuterDiv className="flexCenter">
        <Logo color="#fff" width={170} height={217} />
      </LogoOuterDiv>
      <InnerDiv>
        <LogoDiv>
          <Logo color="#54fe2b" width={51} height={65} />
          <TitleH1 className="bold font30">Kraken</TitleH1>
        </LogoDiv>
        <InputsDiv>
          <h2 className="font25 bold" style={{ marginBottom: "30px" }}>
            Register
          </h2>
          <InputLabel placeholder="Email" type="email" darkMode value={email} setValue={(e) => setEmail(e)} />
          <InputLabel placeholder="Username" type="text" darkMode value={username} setValue={(e) => setUsername(e)} />
          <InputLabel placeholder="Password" type="password" darkMode value={password} setValue={(e) => setPassword(e)} />
          <InputLabel placeholder="Repeat Password" type="password" darkMode value={repeatPpassword} setValue={(e) => setRepeatPassword(e)} />
        </InputsDiv>
        <Button text="REGISTER NOW" action={() => register()} fill />
        <div className="textCenter">
          <p className="font14">Already have an account?</p>
        </div>
        <Link to="/login">
          <Button text="LOGIN" />
        </Link>
      </InnerDiv>
      <BgImg src={AuthBg} alt="background" />
    </div>
  );
};

export default Login;

const LogoOuterDiv = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 750px) {
    display: none!important;
  }
`;
const InnerDiv = styled.div`
  background-color: #0d1223;
  min-width: 500px;
  max-width: 500px;
  min-height: 100vh;
  padding: 0 30px;
  @media (max-width: 750px) {
    min-width: 100%;
  }
`;
const LogoDiv = styled.div`
  text-align: center;
  padding: 6vh 0 2vh 0;
  min-height: 120px;
`;
const TitleH1 = styled.h1`
  padding-top: 15px;
`;
const InputsDiv = styled.div`
  margin: 2vh 0 4vh 0;
`;
const BgImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
