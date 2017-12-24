import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Alert from 'components/Alert';

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
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderField = this.renderField.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var t= this.props.signupUser();
    console.log(t, 't')
  }

  renderField({ input, label, type, meta: { touched, error }}) {
    return (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type} />
          { touched && (error && <span>{error}</span>) }
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="block-signup">
        <Alert message={this.props.authError} />
        <form onSubmit={this.handleSubmit}>
          <Field name="username" component={this.renderField} label="Username"/>
          <Field name="email" type="email" component={this.renderField} label="Email"/>
          <Field name="firstName" component={this.renderField} label="First Name"/>
          <Field name="lastName" component={this.renderField} label="Last Name"/>
          <Field name="password" type="password" component={this.renderField} label="Password"/>
          <Field name="passwordConfirm" type="password" component={this.renderField} label="Confirm Password"/>
          <div>
            <button type="submit" disabled={this.props.submitting}>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'signup', // a unique identifier for this form
  validate, // validation function given to redux-form
})(Signup)