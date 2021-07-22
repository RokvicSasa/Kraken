import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export function PrivateRoute({ children, ...rest }) {
  const token = useSelector((state) => state.token.token);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
 