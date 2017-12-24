import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Alert from 'components/Alert';

const validate = ( fromProps ) => {
  const errors = {};

  if ( !fromProps.username ) {
    errors.username = 'Please enter an username';
  }

  if ( !fromProps.password ) {
    errors.password = 'Please enter a password';
  }

  return errors;
};


class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderField = this.renderField.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signinUser();
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
      <div className="block-signin">
        <Alert message={this.props.authError} />
        <form onSubmit={this.handleSubmit}>
          <Field name="login" component={this.renderField} label="Username or Email"/>
          <Field name="password" type="password" component={this.renderField} label="Password"/>
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
  form: 'signin', // a unique identifier for this form
  validate, // validation function given to redux-form
})(Signin)