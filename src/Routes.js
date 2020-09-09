import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NewPost from './pages/NewPostPage/index'

function Routes() {
  return (
    <Switch>
      <Route exact path="/add-new-post"><NewPost /></Route>
      <Route exact path="/"></Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;