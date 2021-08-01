import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
// Helpers
import { PrivateRoute } from './helpers/PrivateRoute';
import { PublicRoute } from "./helpers/PublicRoute";
// Pages
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Library from "./pages/Library.jsx";
import Gallery from "./pages/Gallery.jsx";
import News from "./pages/News";
import About from "./pages/About.jsx";
import EditProfile from "./pages/EditProfile";
import AddGame from "./pages/AddGame";

// Style
import { lightTheme, darkTheme } from "./style/Theme";
import { GlobalStyles } from "./style/GlobalStyles";
// Components
import Navbar from "./components/Navbar/Navbar.jsx";
// Redux
import { addToken, getUserData } from "./redux/userSlice";
import { setMode } from "./redux/darkModeSlice"; 
import { getGamesData } from "./redux/gameSlice";
import { getGenresData } from "./redux/genreSlice";

function App() {
  const theme = useSelector((state) => state.darkMode.darkMode);
  const reduxToken = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToken(localStorage.getItem("token")));
    dispatch(setMode(localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (reduxToken) {
      dispatch(getUserData(reduxToken));
      dispatch(getGamesData(reduxToken));
      dispatch(getGenresData(reduxToken));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduxToken]);


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
          <PrivateRoute path="/news">
            <News />
          </PrivateRoute>
          <PrivateRoute path="/about">
            <About />
          </PrivateRoute>
          <PrivateRoute path="/editprofile">
            <EditProfile />
          </PrivateRoute>
          <PrivateRoute path="/addgame">
            <AddGame />
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
