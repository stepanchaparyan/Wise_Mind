import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './containers/PageNotFound/PageNotFound';
import Home from './containers/Home/Home';
import AboutUs from './containers/AboutUs/AboutUs';
import CarrierOpportunities from './containers/CarrierOpportunities/CarrierOpportunities';
import ClientResources from './containers/ClientResources/ClientResources';
import ContactUs from './containers/ContactUs/ContactUs';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about_us" component={AboutUs} />
      <Route exact path="/carrier_opportunities" component={CarrierOpportunities} />
      <Route exact path="/client_resources" component={ClientResources} />
      <Route exact path="/contact_us" component={ContactUs} />
      <Route exact path="*" component={PageNotFound} />
    </Switch>
  );
};

export default App;
