import React from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
// Hoc
import { PrivateRoute } from './hoc/PrivateRoute';
import { PublicRoute } from "./hoc/PublicRoute";
import { ProvideAuth, AuthButton } from "./hoc/Auth";
// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Library from "./pages/Library";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <AuthButton />

          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/library">Library</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>

          <Switch>
            <PublicRoute path="/Login">
              <Login />
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
        </div>
      </Router>
    </ProvideAuth>
  );
}

export default App;
