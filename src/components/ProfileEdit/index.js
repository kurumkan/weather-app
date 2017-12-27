import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';
import './style.css';

const validate = ( fromProps ) => {
  const errors = {};

  if ( !fromProps.firstName ) {
    errors.firstName = 'Please enter your firstname';
  }

  if ( !fromProps.lastName ) {
    errors.lastName = 'Please enter your lastname';
  }

  if ( !fromProps.imageUrl ) {
    errors.lastName = 'Please enter profile image url';
  }

  return errors;
};

class Profile extends React.Component {
  componentDidMount() {
    if(this.props.username !== this.props.params.username) {
      browserHistory.push(`/users/${this.props.username}/edit`);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { updateUser, username } = this.props;
    updateUser(username);
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
    const { firstName, lastName, imageUrl, submitting } = this.props;
    return (
      <section className="form-section">
        <form onSubmit={this.handleSubmit}>
          <Field name="firstName" component={this.renderField} label="First Name" />
          <Field name="lastName" component={this.renderField} label="Last Name" />
          <Field name="imageUrl" component={this.renderField} label="Profile image url" />
          <div className="text-right">
            <button type="submit" disabled={submitting} className="btn">
              Save
            </button>
          </div>
        </form>
      </section>
    )
  }
}

export default reduxForm({
  form: 'updateUser', // a unique identifier for this form
  validate, // validation function given to redux-form
})(Profile)