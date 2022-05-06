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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVKUZWw5OXSembRJP6Q4uF2OKkckOwAz0",
  authDomain: "e-bete.firebaseapp.com",
  projectId: "e-bete",
  storageBucket: "e-bete.appspot.com",
  messagingSenderId: "966523321507",
  appId: "1:966523321507:web:fd0cb410f42d03030fd316",
  measurementId: "G-WCXQ4PWLH9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



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