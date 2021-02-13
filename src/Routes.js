import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Home from './components/Home/Home';
import About from './components/About/About';
import CarrierOpportunities from './components/CarrierOpportunities/CarrierOpportunities';
import ClientResources from './components/ClientResources/ClientResources';
import ContactUs from './components/ContactUs/ContactUs';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/carrier_opportunities" component={CarrierOpportunities} />
      <Route exact path="/client_resources" component={ClientResources} />
      <Route exact path="/contact_us" component={ContactUs} />
      <Route exact path="*" component={PageNotFound} />
    </Switch>
  );
};

export default App;
