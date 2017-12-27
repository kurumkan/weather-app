import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Alert from 'components/Alert';
import './style.css';

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


class Signup extends React.Component {

  handleSubmit = (e) => {
    this.props.signupUser();
  }

  renderField = ({ input, label, type, meta: { touched, error }}) => {
    return (
      <div className="form-row">
        <div className="left">
          <label className="form-label">{label}</label>
        </div>
        <div className="right">
          <input {...input} type={type} />
          <div className="error-wrapper">
            { touched && (error && <span>*{error}</span>) }
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <section className="form-section">
        <Alert message={this.props.authError} />
        <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
          <Field name="username" component={this.renderField} label="Username"/>
          <Field name="email" type="email" component={this.renderField} label="Email"/>
          <Field name="firstName" component={this.renderField} label="First Name"/>
          <Field name="lastName" component={this.renderField} label="Last Name"/>
          <Field name="imageUrl" component={this.renderField} label="Profile image url"/>
          <Field name="password" type="password" component={this.renderField} label="Password"/>
          <Field name="passwordConfirm" type="password" component={this.renderField} label="Confirm Password"/>
          <div className="text-center">
            <button type="submit" disabled={this.props.submitting} className="btn">
              Submit
            </button>
          </div>
        </form>
      </section>
    )
  }
}

export default reduxForm({
  form: 'signup', // a unique identifier for this form
  validate // validation function given to redux-form
})(Signup)