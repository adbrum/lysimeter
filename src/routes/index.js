import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Browse from '../pages/browse';
// eslint-disable-next-line no-unused-vars

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Browse} />
  </Switch>
);

export default Routes;
