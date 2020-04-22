import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Dashboard from '../dashboard/dashboard';
import BillingCycle from '../billingCycle/billingCycle';

export default props => (
  <Switch>
    <Route path='/' exact={ true } component={ Dashboard } />
    <Route path='/billingCycles' component={ BillingCycle } />
  </Switch>
)
