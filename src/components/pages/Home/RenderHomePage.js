import React from "react";
import { Link } from "react-router-dom";

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  return (
    <div>
      <h1>Hi {userInfo.name} Welcome to Labs Basic SPA</h1>
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
        <p>
          <Link to="/profile-list">Profiles</Link>
        </p>
        <p>
          <button
            onClick={() => {
              authService.logout();
            }}
          >
            Logout
          </button>
        </p>
      </div>
    </div>
  );
}
export default RenderHomePage;
