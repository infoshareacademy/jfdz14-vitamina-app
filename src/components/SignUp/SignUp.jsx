import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import logo from '../image/logo.png';

const SignUp = (props) => {

  const setApp = (event) => {
    event.preventDefault();
    props.onApp();
  }

  const setLogin = (event) => {
    event.preventDefault();
    props.onLogin();
  }

  return (
      <>
        <CssBaseline />
        <Container maxWidth="sm" style={{height: '100vh', fontFamily: 'Source Sans Pro', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <img src={logo} className="logo" alt=""/>
            <Button onClick={setApp} variant="contained" style={{backgroundColor: '#0098C9', fontFamily: 'Source Sans Pro', fontSize: '16px', color: '#fff', textTransform: 'none', width: '79%'}}>
              Zarejestruj się
            </Button>
            <p className="singin-text">Posiadasz już konto? 
            <Link onClick={setLogin} style={{color: '#0098C9', fontWeight: '600'}}>
              Zaloguj się.
               </Link>
             </p>
          
        </Container>
        </>
  )
}

export default SignUp;