import React from 'react';
import Signup from 'components/Signup';
import { reduxForm } from 'redux-form';
import { signup } from 'actions/usersActions';

// simple email validator
const validateEmail = ( email ) => {
  const re = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test( email );
};

const validate = ( fromProps ) => {
  const errors = {};

  if ( !fromProps.username ) {
    errors.username = 'Please enter an username';
  }

  if ( !fromProps.email ) {
    errors.email = 'Please enter an email';
  }

  if ( !validateEmail( fromProps.email ) ) {
    errors.email = 'It doesn\'t look like a valid email';
  }

  if ( !fromProps.firstName ) {
    errors.firstName = 'Please enter your firstname';
  }

  if ( !fromProps.lastName ) {
    errors.lastName = 'Please enter your lastname';
  }


  if ( !fromProps.password ) {
    errors.password = 'Please enter a password';
  }

  if ( !fromProps.passwordConfirm ) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }

  if ( fromProps.password !== fromProps.passwordConfirm ) {
    errors.password = 'Passwords must match!';
  }

  return errors;
};

export default reduxForm({
  form: 'signup', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  signup
})(Signup)