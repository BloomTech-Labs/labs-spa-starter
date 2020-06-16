import React from "react";
import Login from "./LoginComponent";
import Home from "./HomeComponent";

import { Route, Link } from "react-router-dom";
import { Security, LoginCallback } from "@okta/okta-react";

const clientId = process.env.REACT_APP_CLIENT_ID;

const config = {
  issuer: "https://localhost:3000/oauth2/default",
  redirectUri: window.location.origin + "/implicit/callback",
  clientId: `${clientId}`,
  pkce: true,
};

const Routes = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route></Route>
    </>
  );
};
export default Routes;
