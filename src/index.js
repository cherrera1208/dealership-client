import { Auth0Provider } from "@auth0/auth0-react";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <Auth0Provider
    domain="dev-lgkwcd3k.us.auth0.com"
    clientId="npPd5trvrDo8bb8cuS6PfzZRvr72hLAE"
    redirectUri="http://localhost:3000"
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
