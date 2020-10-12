import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import OrphanagesMap from './pages/OrphanagesMap';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/app" component={OrphanagesMap} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
