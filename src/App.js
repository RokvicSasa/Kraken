import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
// Helpers
import { PrivateRoute } from './helpers/PrivateRoute';
import { PublicRoute } from "./helpers/PublicRoute";
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
import Navbar from "./components/Navbar/Navbar.jsx";
// Redux
import { useDispatch } from "react-redux";
import { addToken, addUsername, addEmail } from "./redux/userSlice";
import { setMode } from "./redux/darkModeSlice"; 

function App() {
  const theme = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToken(localStorage.getItem("token")));
    dispatch(addUsername(localStorage.getItem("username")));
    dispatch(addEmail(localStorage.getItem("email")));
    dispatch(setMode(localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Switch>
          <PublicRoute path="/login">
            <Login />
          </PublicRoute>
          <PublicRoute path="/register">
            <Register />
          </PublicRoute>
          <PrivateRoute path="/librarry">
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
  );
}

export default App;
