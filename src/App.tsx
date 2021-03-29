import React from 'react';
import SignIn from "./pages/SignIn";
import { Home } from "./pages/Home";
import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <SignIn />
      </Switch>
    </div>
  );
};

export default App;
