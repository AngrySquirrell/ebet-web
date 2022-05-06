import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';

import Home from './pages/Home';
import Upcomming from './pages/Upcomming';
import Live from './pages/Live';
import Hidden from './pages/Hidden';
import Test from './pages/Test';
import Login from './pages/Authentification/Login';
import Signup from './pages/Authentification/Signup';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/upcomming' element={<Upcomming />}/>
      <Route path='/live' element={<Live />}/>
      <Route path='/test' element={<Test />}/>


      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/roll' element={<Hidden />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;