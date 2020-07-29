import React from 'react';
import OnBoarding from './components/OnBoarding/OnBoarding';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home';
import About from './components/About';
import Favorite from './components/Challlenges';
import ChallengeDescription from './components/ChallengeDescription';
import UserProfile from './components/UserProfile';
import Diary from './components/Diary';
import Settings from './components/Settings';
import NavBar from './components/NavBar';
import {makeStyles} from '@material-ui/core/styles';

import { BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import ChallengesList from './components/ChallengesList';

import ChallengeRouter from './components/ChallengeDescription';


const Logged = 'Logged'
const Login = 'Login'
const Register = 'Register'


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
            <Route exact path="/challenges">
            <ChallengesList />
            </Route>
            <Route path="/challenges/:id">
              <ChallengeDescription />
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
    log: Logged
  }
  
  handleApp= () => {
    this.setState({
      log: Logged
    })
  }

  handleLogin = () => {
    this.setState({
      log: Login
    })
  }

  handleRegister= () => {
    this.setState({
      log: Register
    })
  }

  render() { 
   
    switch(this.state.log) {
      case Logged:
        return <AppContent />
      case Login:
        return <SignIn onApp={this.handleApp} />
      case Register:
        return <SignUp onLogin={this.handleLogin} onApp={this.handleApp} />
      default:
        return <OnBoarding onLogin={this.handleLogin} onRegister={this.handleRegister} />  
    }
  
  }
}

export default App;
