import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
// Hoc
import { useAuth } from "../hoc/Auth";
// Svg-s
import Logo from "../assets/svg/logo";
// Components
import InputLabel from "../components/InputLabel";
import Button from "../components/Buttons/Button";

const Login = ({ setUserLoggedIn }) => {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    setUserLoggedIn(true);
    auth.signin(() => {
      history.replace(from);
    });
  };

  return (
    <WrapperDiv className="container">
      <LogoDiv>
        <Logo />
        <TitleH1 className="bold font30">Kraken</TitleH1>
      </LogoDiv>
      <InputsDiv>
        <h2 className="font25 bold">Login</h2>
        <InputLabel />
        <InputLabel />
        <div className="flexSpaceCenter">
          <div>
            <p className="font14 semibold">Remember Me</p>
          </div>
          <div>
            <p className="font14 semibold">Forgot Password?</p>
          </div>
        </div>
      </InputsDiv>
      <Button />
      <div className="textCenter">
        <p className="font14">Don't have an account yet?</p>
      </div>
      <Button />
      {/* <button onClick={login}>Log in</button> */}
    </WrapperDiv>
  );
};

export default Login;

const WrapperDiv = styled.div`
  background-color: #0d1223;
  width: 100%;
  min-height: 100vh;
  position: relative;
`;
const LogoDiv = styled.div`
  text-align: center;
  padding: 12vh 0 2vh 0;
  min-height: 130px;
`;
const TitleH1 = styled.h1`
  padding-top: 15px;
`;
const InputsDiv = styled.div`
  padding: 2vh 0;
  margin-bottom: 2vh;
`;
