import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';

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
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderField = this.renderField.bind(this);
  }

  componentDidMount() {
    if(this.props.username !== this.props.params.username) {
      browserHistory.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { updateUser, username } = this.props;
    updateUser(username);
  }

  renderField({ input, label, type, meta: { touched, error }}) {
    return (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} type={type} />
          { touched && (error && <span>{error}</span>) }
        </div>
      </div>
    )
  }

  render() {
    const { firstName, lastName, imageUrl, submitting } = this.props;
    return (
      <div className="profile-block">
        <form onSubmit={this.handleSubmit}>
          <Field name="firstName" component={this.renderField} label="First Name" />
          <Field name="lastName" component={this.renderField} label="Last Name" />
          <Field name="imageUrl" component={this.renderField} label="Profile image url" />
          <div>
            <button type="submit" disabled={submitting}>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'updateUser', // a unique identifier for this form
  validate, // validation function given to redux-form
})(Profile)