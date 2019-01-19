import Auth0Lock from 'auth0-lock'
import { AUTH_CONFIG } from './auth0variables'
import history from '../history'
const { clientId, domain, callbackUrl } = AUTH_CONFIG

export default class Auth {
  lock = new Auth0Lock(clientId, domain, {
    autoclose: true,
    auth: {
      redirectUrl: callbackUrl,
      responseType: 'token id_token',
      params: {
        scope: 'openid'
      }
    },
    theme: {
      logo: 'https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg',
      primaryColor: '#00FBCA',
    },
    languageDictionary: {
      title: 'Custom Title',
      emailInputPlaceholder: 'some placeholder for your email'
    }
  })

  constructor() {
    this.handleAuthentication();
    // binds functions to keep this context
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  handleAuthentication() {
    // Add a callback for Lock's `authenticated` event
    this.lock.on('authenticated', this.setSession.bind(this));
    // Add a callback for Lock's `authorization_error` event
    this.lock.on('authorization_error', (err) => {
      alert(`Error: ${err.error}. Check the console for further details.`);
      history.replace('/home');
    });
  }

  setSession(authResult) {
    if (authResult && authResult.accessToken && authResult.idToken) {
      this.lock.getUserInfo(authResult.accessToken, (err, profile) => {
        console.log('profile', profile.sub)
      })
      // Set the time that the access token will expire at
      console.log('authResult', authResult)
      let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('expires_at', expiresAt);
      // navigate to the home route
      // history.replace('/home');
    }
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    history.replace('/home');
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }


}
