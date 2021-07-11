import React, { useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// Hoc
import { PrivateRoute } from './hoc/PrivateRoute';
import { PublicRoute } from "./hoc/PublicRoute";
import { ProvideAuth, AuthButton } from "./hoc/Auth";
// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Library from "./pages/Library";
import Gallery from "./pages/Gallery";
// Style
import { useDarkMode } from "./components/useDarkMode";
import { lightTheme, darkTheme } from "./style/Theme";
import { GlobalStyles } from "./style/GlobalStyles";
// Components
import ToggleTheme from "./components/Buttons/ToggleTheme";
import Navbar from "./components/Navbar";




function App() {
  const [theme, setTheme, mountedComponent] = useDarkMode();
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  if (!mountedComponent) return <div />;

  return (
    <ProvideAuth>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Router>
          {/* <ToggleTheme theme={theme} toggleTheme={setTheme} />
          <AuthButton setUserLoggedIn={setUserLoggedIn} /> */}

          <Navbar loggedIn={userLoggedIn} />

          <Switch>
            <PublicRoute path="/login">
              <Login setUserLoggedIn={setUserLoggedIn} />
            </PublicRoute>
            <PublicRoute path="/register">
              <Register setUserLoggedIn={setUserLoggedIn} />
            </PublicRoute>
            <PrivateRoute path="/library">
              <Library />
            </PrivateRoute>
            <PrivateRoute path="/gallery">
              <Gallery />
            </PrivateRoute>
            <PrivateRoute path="/">
              <Dashboard />
            </PrivateRoute>
          </Switch>
        </Router>
      </ThemeProvider>
    </ProvideAuth>
  );
}

export default App;
