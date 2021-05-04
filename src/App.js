import React from 'react';
import { Switch, Route } from 'react-router-dom';

import "./App.css";

import Navbar from './components/Navbar';
import Login from './pages/Login';
import HomePage from './pages/Homepage';
import SignUp from './pages/SignUp';


function App() {
  return (
    <div className="bg-gray-100" >
      <Navbar/>
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/Login' component={Login} />
          <Route  path='/SignUp' component={SignUp} />


      </Switch>
    </div>
  );
}

export default App;
