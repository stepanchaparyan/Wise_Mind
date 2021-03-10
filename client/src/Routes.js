import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './containers/PageNotFound/PageNotFound';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import CareerOpportunities from './containers/CareerOpportunities/CareerOpportunities';
import ClientResources from './containers/ClientResources/ClientResources';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/career_opportunities" component={CareerOpportunities} />
      <Route exact path="/client_resources" component={ClientResources} />
      <Route exact path="*" component={PageNotFound} />
    </Switch>
  );
};

export default App;
