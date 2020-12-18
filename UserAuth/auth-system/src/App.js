import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import './App.css';
import Signup from './pages/Signup'
import Home from './pages/Home'
import Login from './pages/Login'
import UserAccount from './pages/UserAccount'
import { ProvideAuth, useAuth } from './use-auth.js';

function App() {
  // let auth = useAuth();
  // const storedData = JSON.parse(localStorage.getItem('userData'));
  //       if (storedData && storedData.token && new Date(storedData.expirationTime) > new Date()) {
  //           auth.setUserToken(storedData.token, new Date(storedData.expirationTime));
  //       }
  return (
    <ProvideAuth>
      <Router>
        <div>
          <Nav />
          <Switch>
            <PrivateRoute path="/account">
              <UserAccount />
            </PrivateRoute>
            <Route path="/signup" component={Signup} />
            <LoginRoute path="/login">
              <Login />
            </LoginRoute>
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}


function Nav() {
  const navStyle = {
    color: 'white',
    textDecoration: 'none',
    listStyleType: 'none'
  };
  let auth = useAuth();
  return (
    <ul className="nav">
      <li>
        <Link style={navStyle} to="/">Home</Link>
      </li>
      {auth.token ?
        <>
          <li>
            <Link style={navStyle} to="/account">Account</Link>
          </li>
          <li>
            <button onClick={() => auth.signout()}>Logout</button>
          </li>
        </> :
        <>
          <li>
            <Link style={navStyle} to="/login">Log in</Link>
          </li>
          <li>
            <Link style={navStyle} to="/signup">Sign Up</Link>
          </li>
        </>}
    </ul>
  )
}

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.token ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  )
}

function LoginRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !auth.token ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/account",
                state: { from: location }
              }}
            />
          )
      }
    />
  )
}
export default App;
