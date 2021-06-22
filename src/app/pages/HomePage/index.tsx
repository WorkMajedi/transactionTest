import BodyCustom from 'components/BodyCustom';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CreateTransaction } from './subPages/CreateTransaction/Loadable';
import { ListTransaction } from './subPages/ListTransaction/Loadable';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>transaction Page</title>
        <meta name="description" content="transaction page app " />
      </Helmet>
      <BodyCustom>
        <Switch>
          <Route path="/transaction/list" component={ListTransaction} />
          <Route path="/transaction/create" component={CreateTransaction} />
          <Redirect from="/transaction" to="/transaction/list" exact />
        </Switch>
      </BodyCustom>
    </>
  );
}
