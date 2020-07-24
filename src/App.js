import React from 'react';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Favorite from './components/Challlenges';
import UserProfile from './components/UserProfile';
import Diary from './components/diary/Diary';
import Settings from './components/Settings';
import NavBar from './components/NavBar';
import {makeStyles} from '@material-ui/core/styles';

import { BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    height: '100vh',
    flexGrow: 1,
    backgroundColor: '#eef1f3',
    padding: '10px',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <header>
          <NavBar />
        </header>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/challenges">
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
              <Dashboard />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
