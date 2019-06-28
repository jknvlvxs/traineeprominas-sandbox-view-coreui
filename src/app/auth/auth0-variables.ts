interface AuthConfig {
    clientID: string;
    domain: string;
    callbackURL: string;
    apiUrl: string;
  }
  
  export const AUTH_CONFIG: AuthConfig = {
    clientID: 'sgUQP3dam5Hu6Tw0DXcpKXUJSmBl5iPv',
    domain: 'jknvlvxs.auth0.com',
    callbackURL: 'https://traineeprominas-jjac-view-temp.herokuapp.com/callback',
    apiUrl: 'https://traineeprominas-jjac-sandbox.herokuapp.com/api/v1.1/'
  };