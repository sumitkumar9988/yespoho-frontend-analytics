import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory
} from "react-router-dom";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";

const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          <Route path="/login" component={Login} />
          {/* <Route path="/create-account" component={CreateAccount} />
          <Route path="/forgot-password" component={ForgotPassword} /> */}

          {/* Place new routes over this */}
          {/* <PrivateRoute> */}
          <Route path="/app" component={Layout} />
          {/* </PrivateRoute> */}
          {/* If you have an index page, you can remothis Redirect */}
          <Redirect exact from="/" to="/login" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
