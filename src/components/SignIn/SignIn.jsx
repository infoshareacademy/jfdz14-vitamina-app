import React from 'react';

import { Container, Button, Link, TextField, makeStyles } from '@material-ui/core';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import "./SignIn.css";
import logo from '../image/logo.png';
import signin from './signin.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh', 
    fontFamily: 'Source Sans Pro', 
    fontSize: '16px',
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'column',
  },
  form: {
    width: '100%',
    maxWidth: '430px',
    margin: theme.spacing(1),
    '& label.Mui-focused': {
      color: '#272727',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#272727',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
          color: '#272727',
          borderColor: '#272727',
          borderRadius: '8px',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#272727',
        },
    },
    '& input:valid + fieldset': {
      borderColor: '#272727',
      borderWidth: 1,
    },
  },
  input: {
    width: '100%',
    maxWidth: '430px',
    color: '#272727',
    marginBottom: theme.spacing(3),
  },
  submit: {
    width: '100%',
    maxWidth: '430px',
    marginBottom: theme.spacing(2),
    backgroundColor: '#0098C9',
    fontFamily: 'Source Sans Pro', 
    fontSize: '16px', 
    color: '#fff', 
    textTransform: 'none',
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: '#0098C9',
    },
  },
}));

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Nieprawidłowy adres e-mail.')
    .required('To pole jest wyamgane.'),
  password: Yup.string()
    .required('To pole jest wymagane.'),
});


const PasswordText = () => {
    const preventDefault = (event) => event.preventDefault();
    return (
        <p>Zapomniane hasło? <Link href="/przypomninamy" onClick={preventDefault} style={{color: '#0098C9', fontWeight: '600'}}>
        Przypomnimy.
      </Link></p>
    )
}

const SignIn = (props) => {
  const classes = useStyles();

  const setApp = (event) => {
    props.onApp();
  }
    return (
        <>
        <Container maxWidth="sm" className={classes.root}>
            <img src={logo} className="logo" alt=""/>
            <img src={signin} className="signin-image" alt=""/>
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                }}
                  validationSchema={SignInSchema}
                  onSubmit={(values, props) => {
                    console.log(values);
                    setApp();
                  }}
              >
            {({ values,
                errors, 
                touched,
                handleChange,
                handleBlur,
                handleSubmit, }) => (
                <Form  className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    className={classes.input}
                    label="E-mail"
                    name="email" 
                    variant="outlined" 
                    size="small" 
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email && touched.email}
                    helperText={(errors.email && touched.email) && errors.email}
                  />
                <TextField 
                className={classes.input}
                    type="password"
                    label="Hasło"
                    name="password" 
                    variant="outlined"
                    size="small" 
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.password && touched.password}
                    helperText={(errors.password && touched.password) && errors.password}
                  />
                  <Button 
                  className={classes.submit} 
                  type="submit" 
                  variant="contained">
                    Zaloguj się
                    </Button>
                </Form>
                )}
            </Formik>
            <PasswordText />
        </Container>
        </>
    )
}

export default SignIn;


/* <Field type="email" id="firstName" name="firstName" placeholder="Jane" component={TextField} variant="outlined"  size="small" />
                <Field type="password" id="outlined-basic" name="password"  placeholder="Jane" component={TextField} variant="outlined"  size="small" />  */

/*  
  '& .MuiTextField-root': {
      margin: theme.spacing(2),
      textAligin: 'center'
    },
*/