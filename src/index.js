import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Security, LoginCallback } from "@okta/okta-react";

import ListItems from "./components/ListComponent"
import Login from "./components/LoginComponent";
import Home from "./components/HomeComponent";
import { config } from "./utils/oktaConfig";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Security {...config}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/implicit/callback" component={LoginCallback} />
        <Route path="/items">
          <ListItems />
        </Route>
      </Security>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
