import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import store from './store';
import App from './App.js';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
const domain = "dev-258a84mh.au.auth0.com";
const clientId = "7RUIZi8lxMShO03A1D1ECotHChbQ2Iqk";

root.render(
  <Auth0Provider
    domain={domain}
   clientId = {clientId}
    redirectUri={window.location.origin}>
      <Provider store={store}> <App/></Provider>
  </Auth0Provider>
);

