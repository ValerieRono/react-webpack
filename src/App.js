import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from './routes';

import './main.scss';
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';


const switchRoutes = (
  <Switch>
      {routes
        .map((prop, key) => (
          <Route
            exact
            path={prop.path}
            component={prop.component}
            key={key}
          />
        ))}
  </Switch>
);

const App = () => (
  <Router>
      <div>
          <Header />
          {switchRoutes}
          <Footer/>
      </div>
  </Router>
);

export default App;
