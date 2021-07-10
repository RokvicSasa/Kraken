import React from "react";
import { useHistory, useLocation } from "react-router-dom";
// Hoc
import { useAuth } from "../hoc/Auth";

const Login = () => {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    auth.signin(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
      <h1>TEST</h1>
    </div>
  );
};

export default Login;
