import React from 'react';
import { Field } from 'redux-form';

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      { touched && (error && <span>{error}</span>) }
    </div>
  </div>
)

const Signup = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        console.log(e)
      }}
    >
      <Field name="username" component={renderField} label="Username"/>
      <Field name="email" type="email" component={renderField} label="Email" />
      <Field name="firstName" component={renderField} label="First Name" />
      <Field name="lastName" component={renderField} label="Last Name" />
      <Field name="password" type="password" component={renderField} label="Password" />
      <Field name="passwordConfirm" type="password" component={renderField} label="Confirm Password" />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
      </div>
    </form>
  )
};

export default Signup;