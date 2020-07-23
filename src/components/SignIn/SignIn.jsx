import React from 'react';
import "./SignIn.css";

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import TextField from "@material-ui/core/TextField";
/* import { Formik, Field, Form } from 'formik'; */
import logo from '../image/logo.png';
import signin from './signin.svg';

const Basic = () => (
    <div>
      <h1>Sign 
        in
      </h1>
    </div>
  );

const PasswordText = () => {
    const preventDefault = (event) => event.preventDefault();
    return (
        <p className="signin-text">Zapomniane hasło? <Link href="/przypomninamy" onClick={preventDefault} style={{color: '#0098C9', fontWeight: '600'}}>
        Przypomnimy.
      </Link></p>
    )
}
const SignIn = (props) => {
  const setApp = (event) => {
    event.preventDefault();
    props.onApp();
  }

    return (
        <>
        <CssBaseline />
        <Container maxWidth="sm" style={{height: '100vh', fontFamily: 'Source Sans Pro', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <img src={logo} className="logo" alt=""/>
            <img src={signin} className="signin-image" alt=""/>
            <Basic />
            <Button onClick={setApp} variant="contained" style={{backgroundColor: '#0098C9', fontFamily: 'Source Sans Pro', fontSize: '16px', color: '#fff', textTransform: 'none', width: '79%'}}>
              Zaloguj się
            </Button>
            <PasswordText />
        </Container>
        </>
    )
}

export default SignIn;


/* <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={async values => {
          await new Promise(r => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="Jane" as={TextField} />
  
          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />
  
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <Button type="submit" variant="contained" href="/home" style={{backgroundColor: '#0098C9', fontFamily: 'Source Sans Pro', fontSize: '16px', color: '#fff', textTransform: 'none', width: '79%'}}>Submit</Button>
        </Form>
      </Formik>*/