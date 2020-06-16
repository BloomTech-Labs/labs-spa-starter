import React from "react";
import Login from "../components/LoginComponent";
import Home from "../components/HomeComponent";

import { Security, LoginCallback } from "@okta/okta-react";
import { Route } from "react-router-dom";

const clientId = process.env.REACT_APP_CLIENT_ID;

const config = {
  issuer: "https://localhost:3000/oauth2/default",
  redirectUri: window.location.origin + "/implicit/callback",
  clientId: `${clientId}`,
  pkce: true,
};

const routes = () => {
  return (
    <>
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
export default routes;
