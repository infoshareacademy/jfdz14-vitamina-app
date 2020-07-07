import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Favorite from './components/Challlenges';
import UserProfile from './components/UserProfile';
import Diary from './components/Diary';
import Settings from './components/Settings';


import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom'
import './App.css';
import Profile from './components/UserProfile';

function App() {
  return (
    <BrowserRouter>
     <header>
       <h1>
       HI ✋
       </h1>
       <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/userProfile">Profil</NavLink>
            </li>
            <li>
              <NavLink to="/diary">Dzienik</NavLink>
            </li>
            <li>
              <NavLink to="/challenges">Wyzwania</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/settings">Ustawienia</NavLink>
            </li>
          </ul>
       </nav>
     </header>
     <div>
     <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/challenges">
              <Favorite />
            </Route>
            <Route path="/userProfile">
              <UserProfile />
            </Route>
            <Route path="/diary">
              <Diary />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
     </div>
    </BrowserRouter>
  );
}

export default App;
