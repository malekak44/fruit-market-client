import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
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
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;