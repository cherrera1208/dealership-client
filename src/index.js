import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './components/About.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-lgkwcd3k.us.auth0.com'
      clientId='npPd5trvrDo8bb8cuS6PfzZRvr72hLAE'
      redirectUri='http://localhost:3000'
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
