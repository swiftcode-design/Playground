import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';

const auth = new Auth();

export const makeMainRoutes = () => {
  return (
    <BrowserRouter forceRefresh={false} component={App}>
      <div>
        <Route path="/" render={(props) => <App auth={auth} {...props} />} />
        <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => <Callback {...props} />} />
      </div>
    </BrowserRouter>
  );
}
