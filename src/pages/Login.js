import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Hoc
import { useAuth } from "../hoc/Auth";
// Svg-s
import Logo from "../assets/svg/logo";
// Components
import InputLabel from "../components/InputLabel";
import Checkbox from "../components/Checkbox";
import Button from "../components/Buttons/Button";

const Login = ({ setUserLoggedIn }) => {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

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
        <InputLabel placeholder="Username" type="text" darkMode value={username} setValue={(e) => setUsername(e)} />
        <InputLabel placeholder="Password" type="password" darkMode value={password} setValue={(e) => setPassword(e)} />
        <div className="flexSpaceCenter">
          <Checkbox checked={checked} action={() => setChecked((checked) => !checked)} />
          <div>
            <PasswordButton onClick={() => alert("pressed")} className="font14 semibold animate">
              Forgot Password?
            </PasswordButton>
          </div>
        </div>
      </InputsDiv>
      <Button text="LOGIN" action={() => login()} fill />
      <div className="textCenter">
        <p className="font14">Don't have an account yet?</p>
      </div>
      <Link to="/register">
        <Button text="REGISTER" />
      </Link>
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
const PasswordButton = styled.button`
  border: 0px;
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  &:hover {
    color: #54fe2b;
  }
`;
