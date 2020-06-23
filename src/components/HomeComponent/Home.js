import React from "react";
import { useOktaAuth } from "@okta/okta-react";
import { Redirect } from "react-router-dom";

import { HomePage } from "../pages";

function Home() {
  const { authState } = useOktaAuth();
  const { isAuthenticated, isPending } = authState;

  // Authstate is the prop we want to use to check if users are authenticated.
  // We can perform these checks on the front end, but ought to make sure we perform them on the backend.
  return isPending ? <div>... loading home page</div> : <HomePage />;
}

export default Home;
