const OktaURL = "dev-886474.okta.com";

const config = {
  issuer: `https://${OktaURL}/oauth2/default`,
  redirectUri: window.location.origin + "/implicit/callback",
  clientId: process.env.REACT_APP_CLIENT_ID,
  pkce: true,
  scopes: ["openid", "email", "profile"],
};

export { config };
