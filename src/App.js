import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Favorite from './components/Challlenges';
import UserProfile from './components/UserProfile';
import Diary from './components/Diary';
import Settings from './components/Settings';
import NavBar from './components/NavBar';


import { BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <main className='app__content'>
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
      </main>
    </BrowserRouter>
  );
}

export default App;
