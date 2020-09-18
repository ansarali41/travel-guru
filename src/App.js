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

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name:'',
    email:''
  });

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/booking/:LocName">
            <Booking></Booking>
          </Route>

          <PrivateRoute path="/nearestHotel/:place">
            <NearestHotel></NearestHotel>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
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
