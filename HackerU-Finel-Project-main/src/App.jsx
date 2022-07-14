import React from "react";
import UserUi from "./UserUi";
import { Route, Redirect } from "react-router-dom";
import Admin from "./Admin";

const App = () => {
  return (
    <div>
      <Route path="/" exact>
        <Redirect to="/nike/home" />
      </Route>
      <Route path="/nike" component={UserUi} />
      <Route path="/admin" component={Admin} />
    </div>
  );
};
export default App;
