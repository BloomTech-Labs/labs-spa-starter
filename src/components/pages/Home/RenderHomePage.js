import React from "react";
import { Link } from "react-router-dom";

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  return (
    <div>
      <h1>Hi {userInfo.name} Welcome to Labs Basic SPA</h1>
      <div>
        <p>
          This is an example of a common example of how we'd like for you to
          approach components.
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
