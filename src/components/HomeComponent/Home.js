import React from "react";
import { useOktaAuth } from "@okta/okta-react";

function Home() {
  const { authState } = useOktaAuth();
  // Authstate is the prop we want to use to check if users are authenticated.
  // We can perform these checks on the front end, but ought to make sure we perform them on the backend.
  if (!authState.isAuthenticated) {
    // we actually want to redirect to login here to get the user to sign in.
    return <div>Not Authenticated</div>;
  } else {
    return (
      <div>
        <h1>Welcome to Labs Basic SPA</h1>
        <p>
          The following are a few components put together in a way that informs
          industry practices. Use this repository as a boilerplate for your
          work. Follow the file architecture and component patterns you see
          here.
        </p>
        <div>
          <p>
            This is an example of a common form input group. See the
            `./src/components/FormComponents` directory for more information.
            Notice that we're importing the entire form group from the
            `index.js` file found within that directory. This pattern will help
            you break down your features in terms of components. Once you're
            read, organize your components inside a 'container' and simply use
            the `index.js` file to pass that container around in your app.
          </p>
        </div>
        {/* ListComponent */}
      </div>
    );
  }
}

export default Home;
