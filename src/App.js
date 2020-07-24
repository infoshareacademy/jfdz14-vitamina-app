import React from 'react';
import OnBoarding from './components/OnBoarding/OnBoarding';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home';
import About from './components/About';
import Favorite from './components/Challlenges';
import UserProfile from './components/UserProfile';
import Diary from './components/Diary';
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
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


function AppContent() {
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
      </div>
    </BrowserRouter>
  );
}

class App extends React.Component {
  state = {
    user: null,
    log: null
  }

  handleTemporarySetUse = () => {
    this.setState({
      user: 'Uzytkownik'
    })
  }
  
  handleApp= () => {
    this.setState({
      log: 'Logged'
    })
  }

  handleLogin = () => {
    this.setState({
      log: 'Login'
    })
  }

  handleRegister= () => {
    this.setState({
      log: 'Register'
    })
  }

  render() {
    if (this.state.user || this.state.log === 'Logged') {
      return <AppContent />
    } else if (this.state.log === 'Login') {
      return <SignIn onApp={this.handleApp} />
    } else if (this.state.log === 'Register') {
      return <SignUp onLogin={this.handleLogin} onApp={this.handleApp} />
    } else {
      return <OnBoarding onTemporarySetUser={this.handleTemporarySetUse} onLogin={this.handleLogin} onRegister={this.handleRegister} />
  }
}
}

export default App;