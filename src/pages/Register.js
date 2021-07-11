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
import Button from "../components/Buttons/Button";

const Login = ({ setUserLoggedIn }) => {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPpassword, setRepeatPassword] = useState("");

  let { from } = location.state || { from: { pathname: "/" } };
  let register = () => {
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
  padding: 6vh 0 2vh 0;
  min-height: 120px;
`;
const TitleH1 = styled.h1`
  padding-top: 15px;
`;
const InputsDiv = styled.div`
  margin: 2vh 0 4vh 0;
`;
