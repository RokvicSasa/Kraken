import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Assets
import Logo from "../assets/svg/logo";
import AuthBg from "../assets/img/auth-bg.png";
// Components
import InputLabel from "../components/Inputs/InputLabel.jsx";
import Checkbox from "../components/Inputs/Checkbox.jsx";
import Button from "../components/Buttons/Button.jsx";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { loginUser, userSelector, clearState } from "../redux/userSlice";

const Login = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const { isFetching, isSuccess, isError, errorMessage } = useSelector(userSelector);
  // Local State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [checked, setChecked] = useState(false);
  const [pageError, setPageError] = useState(null)

  const loginHandler = () => {
    if (email.length < 1) {
      setEmailError(true);
    } else if (password.length < 1) {
      setPasswordError(true);
    } else {
      dispatch(loginUser({email, password}));
    }
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isError) {
      setPageError(errorMessage);
      dispatch(clearState());
    }
    if (isSuccess) {
      dispatch(clearState());
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccess]);

  const resetErrors = () => {
    setEmailError(false);
    setPasswordError(false);
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
          {pageError && errorMessage ? <ErrorP className="font13">{errorMessage}</ErrorP> : null}
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
        <Button text="LOGIN" action={() => loginHandler()} fill isLoading={isFetching} />
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
  margin-bottom: 20px;
`;