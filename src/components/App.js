import React from "react";
import FormComponent from "./FormComponent";
import { Security, LoginCallback } from "@okta/okta-react";

const clientId = process.env.REACT_APP_CLIENT_ID;

const config = {
  issuer: "https://localhost:3000/oauth2/default",
  redirectUri: window.location.origin + "/implicit/callback",
  clientId: `${clientId}`,
  pkce: true,
};

function App() {
  return (
    <div>
      <h1>Welcome to Labs Basic SPA</h1>
      <p>
        The following are a few components put together in a way that informs
        industry practices. Use this repository as a boilerplate for your work.
        Follow the file architecture and component patterns you see here.
      </p>
      <div>
        <p>
          This is an example of a common form input group. See the
          `./src/components/FormComponents` directory for more information.
          Notice that we're importing the entire form group from the `index.js`
          file found within that directory. This pattern will help you break
          down your features in terms of components. Once you're read, organize
          your components inside a 'container' and simply use the `index.js`
          file to pass that container around in your app.
        </p>
        <FormComponent />
      </div>
    </div>
  );
}

export default App;
