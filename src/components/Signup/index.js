import React from 'react';
import { Field } from 'redux-form';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderField = this.renderField.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signinUser({

    });
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
    )
  }
}

export default Signup;