import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Login from './views/components/login/LoginView'
import ProtectedRoutes from './routes/ProtectedRoutes'
import PublicRoutes from './routes/PublicRoutes'

//state redux global
import { Provider } from 'react-redux'
import store from './redux/store'
const App = () => {
  return (<Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <PublicRoutes exact path="/login" component={Login} />
          <ProtectedRoutes path="/dashboard" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
