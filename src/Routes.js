import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NewPost from './pages/newPost';
import HomePage from './pages/homepage';
import PostPage from './pages/postPage';

function Routes() {
  return (
    <Switch>
      <Route exact path="/add-new-post"><NewPost /></Route>
      <Route exact path="/post/:id"><PostPage /></Route>
      <Route exact path="/"><HomePage /></Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;