import React, { useState, useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";

import HomePage from "./HomePage";

function HomeContainer() {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      // Our router will redirect back to login anyway.
      setUserInfo(null);
    } else {
      authService.getUser().then((info) => {
        // if user is authenticated we can use the authService to snag some user info.
        setUserInfo(info);
      });
    }
  }, [authState, authService]);

  if (authState.isPending) return <div>...loading login</div>;
  return (
    <>
      {authState.isAuthenticated && !userInfo && (
        <div>Loading user information...</div>
      )}
      {authState.isAuthenticated && userInfo && (
        <HomePage userInfo={userInfo} />
      )}
    </>
  );
  // Authstate is the prop we want to use to check if users are authenticated.
  // We can perform these checks on the front end, but ought to make sure we perform them on the backend.
}

export default HomeContainer;
