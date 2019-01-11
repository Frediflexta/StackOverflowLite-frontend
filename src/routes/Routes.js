import React from 'react';
import {
  Router, Route, Switch
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ROUTE_PATH from '../utils/routh-paths/routhPaths';
import Homepage from '../components/presentation/Home/Homepage';
import NotFound from '../components/presentation/404/Not-found';
import NavBar from '../components/containers/header/header';
import Footer from '../components/presentation/footer/Footer';
import Login from '../components/containers/login/Login';
import Register from '../components/containers/signup/Register';
import QuestionContainer from '../components/containers/questionsContainer/QuestionContainer';
import PostQuestion from '../components/containers/post-questions/PostQuestion';

const history = createHistory();

const Routes = () => {
  return (
    <Router history={history}>
      <div>
        <NavBar />
        <Switch>
          <Route exact path={ROUTE_PATH.homepage} component={Homepage} />
          <Route path={ROUTE_PATH.login} component={Login} />
          <Route path={ROUTE_PATH.register} component={Register} />
          <Route path={ROUTE_PATH.questions} component={QuestionContainer} />
          <Route path={ROUTE_PATH.postQuestion} component={PostQuestion} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default Routes;
