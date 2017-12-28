import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Alert from 'components/Alert';
import './style.css';

const validate = ( fromProps ) => {
  const errors = {};

  if ( !fromProps.login ) {
    errors.login = 'Please enter username or email';
  }

  if ( !fromProps.password ) {
    errors.password = 'Please enter a password';
  }

  return errors;
};


class Signin extends React.Component {

  handleSubmit = () => {
    this.props.signinUser();
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
          <Field name="login" component={this.renderField} label="Username or Email"/>
          <Field name="password" type="password" component={this.renderField} label="Password"/>
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

Signin.propTypes = {
  authError: PropTypes.string,
  submitting: PropTypes.bool,

  signinUser: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

Signin.defaultProps = {
  authError: '',
  submitting: false
};

export default reduxForm({
  form: 'signin', // a unique identifier for this form
  validate, // validation function given to redux-form
  fields: [ 'login', 'password' ],
})(Signin)