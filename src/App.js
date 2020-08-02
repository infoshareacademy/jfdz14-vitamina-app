import React from 'react';
import OnBoarding from './components/OnBoarding/OnBoarding';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home';
import About from './components/About';
import Favorite from './components/Challlenges';


import ChallengeImage1 from "./components/image/challenge1.jpg";
import ChallengeImage2 from "./components/image/challenge2.jpg";
import ChallengeImage3 from "./components/image/challenge3.jpg";

import ChallengeDescription from './components/ChallengeDescription';
import UserProfile from './components/UserProfile';
import Diary from './components/Diary';
import Settings from './components/Settings';
import NavBar from './components/NavBar';
import {makeStyles} from '@material-ui/core/styles';

import { BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import ChallengesList from './components/ChallengesList';

import ChallengeDescriptionRouter from './components/ChallengeDescription';


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


function AppContent(props) {
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
              <ChallengesList challangeUpdater={props.handleChallangeUpdate} multiFilterChange={props.multiFilterChange} challanges={props.challanges} filter={props.filter} categories={props.categories} />
            </Route>
            <Route path="/challenges/:id">
              <ChallengeDescription  challangeUpdater={props.handleChallangeUpdate} challanges={props.challanges} categories={props.categories} />
            </Route>
            <Route path="/userProfile">
              <UserProfile />
            </Route>
            <Route path="/diary">
              <Diary />
            </Route>
            <Route path="/settings">
              <Settings challanges={props.challanges} />
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



  constructor(props){

    super(props);

  this.state = {
    log: Logged,
    filter: {
      period: [1,30],
      text: "",
      groups: [0,1,2,3]
    },
    categories: [
      {id: 0, title:"Sylwetka", value:5, selected: false},
      {id: 1, title: "Witalność", value:5, selected: false}, 
      {id: 2, title: "Zwyczaje", value:5, selected: false}, 
      {id: 3, title: "Dieta", value:5, selected: false}
    ],
    challanges: [
      {
        img: ChallengeImage1,
        title: 'Spacer dla Twojego umysłu.',
        id: 1,
        category: 0,
        period: 5
      },
      {
        img: ChallengeImage2,
        title: 'Wyśnij sobie spokój.',
        id: 2,
        category: 1,
        period: 25
      },
      {
        img: ChallengeImage3,
        title: 'Pij wodę, będziesz wielki.',
        id: 3,
        category: 2,
        period: 5
      },
      {
        img: ChallengeImage3,
        title: 'Pij wodę, będziesz wielki.',
        id: 4,
        category: 3,
        period: 5
      },
      {
        img: ChallengeImage3,
        title: 'Pij wodę, będziesz wielki.',
        id: 5,
        category: 0,
        period: 5
      },
      {
        img: ChallengeImage3,
        title: 'Pij wodę, będziesz wielki.',
        id: 6,
        category: 1,
        period: 5
      },
      {
        img: ChallengeImage3,
        title: 'Pij wodę, będziesz wielki.',
        id: 7,
        category: 2,
        period: 1
      },
      {
        img: ChallengeImage3,
        title: 'Pij wodę, będziesz wielki.',
        id: 8,
        category: 3,
        period: 1
      },
      {
        img: ChallengeImage3,
        title: 'Pij wodę, będziesz wielki.',
        id: 9,
        category: 3,
        period: 5
      },
      {
        img: ChallengeImage3,
        title: 'Pij wodę, będziesz wielki.',
        id: 0,
        category: 2,
        period: 5
      },
    ]
  };
}


handleMultiFilterChange = (grp, event, val) => {

  switch(grp){
    case "category":

        // 1. Make a shallow copy of the items
        let categories = [...this.state.categories];
        // 2. Make a shallow copy of the item you want to mutate

        categories.forEach((category, catIndex) => {

          category.selected = false;
          
          val.forEach((value,valueIndex) => {
          
            if(value.id === category.id){
              category.selected = true;
              categories[catIndex] = category;
            }
          });
        });

        this.setState({categories});
      break;
    case "filter_text":
      
      this.setState({
        filter:{
          text: event
        }
      });
      break;

    case "filter_period":
      
      this.setState({
        filter:{
          period: val
        }
      });
      break;
    case "filter_groups":
      let groups = event;

      let newGroupsArr = [];

      groups.forEach((item, index) => {
        if(item.selected){
          newGroupsArr.push(item.key);
        }
      });

      this.setState({
        filter:{
          groups: newGroupsArr
        }
      });
      break;
    default:
  }
}
  


  handleChallangeUpdate = () => {
    console.log("Handle my change in app.js please");
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
        return <AppContent challangeUpdater={this.state.handleChallangeUpdate} multiFilterChange={this.state.handleMultiFilterChange} challanges={this.state.challanges} filter={this.state.filter} categories={this.state.categories} />
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
