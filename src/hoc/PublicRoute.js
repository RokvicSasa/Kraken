import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export function PublicRoute({ children, ...rest }) {
  const token = useSelector((state) => state.user.token);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
}
