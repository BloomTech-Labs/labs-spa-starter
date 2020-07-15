import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';

import RenderHomePage from './RenderHomePage';

function HomeContainer({ LoadingComponent }) {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    let isSubscribed = true;
    authService
      .getUser()
      .then(info => {
        // if user is authenticated we can use the authService to snag some user info.
        // isSubscribed is a boolean toggle that we're using to clean up our useEffect.
        if (isSubscribed) {
          setUserInfo(info);
        }
      })
      .catch(err => {
        isSubscribed = false;
        return setUserInfo(null);
      });
    return () => (isSubscribed = false);
  }, [authState, authService]);

  return (
    <>
      {authState.isAuthenticated && !userInfo && (
        <LoadingComponent message="Fetching user profile..." />
      )}
      {authState.isAuthenticated && userInfo && (
        <RenderHomePage userInfo={userInfo} authService={authService} />
      )}
    </>
  );
}

export default HomeContainer;
