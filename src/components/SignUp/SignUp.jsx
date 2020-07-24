import React from 'react';

import { Container, Button, Link, TextField, makeStyles } from '@material-ui/core';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import logo from '../image/logo.png';
import google from './google.svg';

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

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .required('To pole jest wymagane.'),
  email: Yup.string()
    .email('Nieprawidłowy adres e-mail.')
    .required('To pole jest wyamgane.'),
  password: Yup.string()
    .min(5, 'Minimum 5 znaków.')
    .required('To pole jest wymagane.'),
});


const SignUp = (props) => {
  const classes = useStyles();
  
  const setApp = (event) => {
    props.onApp();
  }

  const setLogin = (event) => {
    event.preventDefault();
    props.onLogin();
  }

  return (
      <>
    <Container maxWidth="sm" className={classes.root}>
            <img src={logo} className="logo" alt=""/>
            <p><span style={{fontWeight:'600'}}>Kontynuuj</span> rejestrację za pomocą <span style={{fontWeight:'600'}}>konta</span>:</p>
            <Button onClick={(event) => event.preventDefault()}
                  style={{
                    width: '100%',
                    maxWidth: '430px',
                    backgroundColor: '#ffff',
                    fontFamily: 'Source Sans Pro', 
                    fontSize: '16px', 
                    color: '#272727', 
                    textTransform: 'none',
                    border: '1px solid #272727',
                    borderRadius: '8px',
                    }} 
                   >
                     <img src={google} alt="" style={{margin: '0px 5px',width: '22px'}} /> Google
                    </Button>
            <p>Lub <span style={{fontWeight:'600'}}>zarejestruj się</span> za pomocą poczty <span style={{fontWeight:'600'}}>e-mail</span>.</p>

              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  password: '',
                }}
                  validationSchema={SignUpSchema}
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
                    label="Imię"
                    name="name" 
                    variant="outlined" 
                    size="small" 
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.name && touched.name}
                    helperText={(errors.name && touched.name) && errors.name}
                  />
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
                    Zarejestruj się
                    </Button>
                </Form>
                )}
            </Formik>
            <p style={{margin: '0px 0px 5% 0px', fontSize: '12px'}}>Kontynuując <span style={{fontWeight: '600'}}>zgadzasz się</span> na naszą <Link onClick={(event) => event.preventDefault()} style={{color: '#0098C9', fontWeight: '600', cursor: 'pointer'}}>
              politykę prywatności.
              </Link>
            </p>
            <p>Posiadasz już konto? <Link onClick={setLogin} style={{color: '#0098C9', fontWeight: '600', cursor: 'pointer'}}>
              Zaloguj się.
              </Link>
            </p>

        </Container>
        </>
  )
}

export default SignUp;


