import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PageNotFound from './components/PageNotFound/PageNotFound';
import Booking from './components/Booking/Booking';
import NearestHotel from './components/NearestHotel/NearestHotel';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Progress from './components/Progress/Progress';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/booking/:locationName">
            <Booking></Booking>
          </Route>

          <PrivateRoute path="/nearestHotel/:place">
            <NearestHotel></NearestHotel>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/progress">
            <Progress></Progress>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
