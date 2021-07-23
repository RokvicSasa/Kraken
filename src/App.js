import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
// Hoc
import { PrivateRoute } from './hoc/PrivateRoute';
import { PublicRoute } from "./hoc/PublicRoute";
// Pages
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Library from "./pages/Library.jsx";
import Gallery from "./pages/Gallery.jsx";
// Style
import { lightTheme, darkTheme } from "./style/Theme";
import { GlobalStyles } from "./style/GlobalStyles";
// Components
import ToggleTheme from "./components/Buttons/ToggleTheme.jsx";
import Navbar from "./components/Navbar.jsx";
// Redux
import { useDispatch } from "react-redux";
import { addUsername, addToken } from "./redux/userSlice";
import { setMode } from "./redux/darkModeSlice"; 

function App() {
  const theme = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToken(localStorage.getItem("token")));
    dispatch(addUsername(localStorage.getItem("username")));
    dispatch(setMode(localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <ToggleTheme theme={theme} />
        <Navbar />
        <Switch>
          <PublicRoute exact path="/login">
            <Login />
          </PublicRoute>
          <PublicRoute exact path="/register">
            <Register />
          </PublicRoute>
          <PrivateRoute exact path="/library">
            <Library />
          </PrivateRoute>
          <PrivateRoute exact path="/gallery">
            <Gallery />
          </PrivateRoute>
          <PrivateRoute exact  path="/">
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
