import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from './components/Admin/Admin';
import Orders from './components/Orders/Orders';
export const UserContext = createContext();

const App = () => {
  const [signedInUser, setSignedInUser] = useState({});
  return (
    <UserContext.Provider value={[signedInUser, setSignedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route path="/admin/:action">
            <Admin />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;