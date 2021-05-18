import React from 'react';
import { Switch, Route } from 'react-router-dom';

import "./App.css";

import Navbar from './components/Navbar';
import Login from './pages/Login';
import HomePage from './pages/Homepage';
import SignUp from './pages/SignUp';
import Tables from './pages/Tables';



function App() {
  return (
    <div className="bg-gray-200" >
      <Navbar/>
      <Switch>
          <Route  path='/' exact component={HomePage} />
          <Route  path='/login' component={Login} />
          <Route  path='/signup' component={SignUp} />
          <Route  path='/tables' component={Tables} />



      </Switch>
    </div>
  );
}

export default App;
