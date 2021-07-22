import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Svg-s
import Logo from "../assets/svg/logo";
// Img-s
import AuthBg from "../assets/img/auth-bg.png";
// Components
import InputLabel from "../components/InputLabel";
import Checkbox from "../components/Checkbox";
import Button from "../components/Buttons/Button";
// API
import {apiLogin} from "../api/Api";
// Redux
import { useDispatch } from "react-redux";
import { addUsername } from "../redux/userSlice";
import { addToken } from "../redux/tokenSlice";

const Login = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  // Local State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  // Handlers
  let loginHandler = () => {
    apiLogin(username, password, function (result) {
      if (result.jwt && result.jwt !== null) {
        history.replace(from);
        dispatch(addToken(result.jwt));
        dispatch(addUsername(result.user.username));
      } else {
        console.log("we have error inside login component", result);
      };
    });
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
        <Button text="LOGIN" action={() => loginHandler()} fill />
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
const BgImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
