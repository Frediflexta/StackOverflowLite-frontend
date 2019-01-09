import React from 'react';
import {
  Router, Route, Switch
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ROUTE_PATH from '../utils/routh-paths/routhPaths';
import NotFound from '../components/presentation/404/Not-found';
import NavBar from '../components/presentation/header/header';
import Footer from '../components/presentation/footer/Footer';
import Login from '../components/containers/login/Login';
import Register from '../components/containers/signup/Register';

const history = createHistory();

const Routes = () => {
  return (
    <Router history={history}>
      <div>
        <NavBar />
        <Switch>
          {/* <Route path={ROUTE_PATH.homepage} component={Homepage} exact /> */}
          <Route path={ROUTE_PATH.login} component={Login} />
          <Route path={ROUTE_PATH.register} component={Register} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default Routes;
