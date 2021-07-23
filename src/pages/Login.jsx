import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Svg-s
import Logo from "../assets/svg/logo";
// Img-s
import AuthBg from "../assets/img/auth-bg.png";
// Components
import InputLabel from "../components/InputLabel.jsx";
import Checkbox from "../components/Checkbox.jsx";
import Button from "../components/Buttons/Button.jsx";
// API
import {apiLogin} from "../api/Api";
// Redux
import { useDispatch } from "react-redux";
import { addUsername, addToken } from "../redux/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  // Local State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const loginHandler = () => {
    if (email.length < 1) {
      setEmailError(true);
    }else if (password.length < 1) {
      setPasswordError(true);
    } else {
      setIsLoading(true);
      apiLogin(email, password, function (result) {
        if (result.jwt && result.jwt !== "") {
          setIsLoading(false);
          history.replace(from);
          dispatch(addToken(result.jwt));
          dispatch(addUsername(result.user.username));
          localStorage.setItem("token", result.jwt);
          localStorage.setItem("username", result.user.username);
        } else {
          setIsLoading(false);
          setEmail("");
          setPassword("");  
          if (result.statusCode === 400) {
            setError("Incorrect email address or password, please try again");
          }else {
            setError("There is an error logging you. Please try again later.");
          }
        }
      });
    }
  };

  const resetErrors = () => {
    setEmailError(false);
    setPasswordError(false);
    setError(null);
  }

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
          <h2 className="font25 bold margin20-0">Login</h2>
          {error ? <ErrorP className="font13">{error}</ErrorP> : null}
          <form>
            <InputLabel
              name="email"
              autoComplete="email"
              placeholder="Email"
              type="text"
              value={email}
              setValue={(e) => {
                setEmail(e);
                resetErrors();
              }}
              error={emailError}
              color="green"
            />
            <InputLabel
              name="password"
              autoComplete="current-password"
              placeholder="Password"
              type="password"
              value={password}
              setValue={(e) => {
                setPassword(e);
                resetErrors();
              }}
              error={passwordError}
              color="green"
            />
          </form>
          <div className="flexSpaceCenter">
            <Checkbox checked={checked} action={() => setChecked((checked) => !checked)} />
            <div>
              <PasswordButton onClick={() => alert("pressed")} className="font14 semibold animate">
                Forgot Password?
              </PasswordButton>
            </div>
          </div>
        </InputsDiv>
        <Button text="LOGIN" action={() => loginHandler()} fill isLoading={isLoading} />
        <div className="textCenter">
          <p className="font14">Don't have an account yet?</p>
        </div>
        <Link to="/register">
          <Button text="REGISTER" />
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
    padding: 0 15px;
  }
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
  padding-bottom: 2vh 0;
  margin-bottom: 2vh;
`;
const PasswordButton = styled.button`
  padding: 10px 0;
  border: 0px;
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  &:hover {
    color: #615dfa;
  }
`;
const BgImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
const ErrorP = styled.p`
  text-align: center;
  color: #e75e82;
`;