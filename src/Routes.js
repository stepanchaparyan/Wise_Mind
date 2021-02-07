import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Home from './components/Home/Home';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/home" component={Home} /> */}
      <Route exact path="*" component={PageNotFound} />
    </Switch>
  );
};

export default App;
