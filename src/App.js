
import React from 'react';
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

function App() {
  return (
    <Router >
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/booking">
          <Booking></Booking>
        </Route>
        
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="*">
          <PageNotFound></PageNotFound>
        </Route>
      
      </Switch>
    </Router>
  );
}

export default App;
