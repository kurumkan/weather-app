import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import Loader from 'components/Loader';
import './style.css';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUser(this.props.params.username);
  }

  render() {
    const { username, firstName } = this.props;

    if(!username) {
      return <Loader />;
    }
    return (
      <div className="">
        { firstName }
      </div>
    );
  }
}

Profile.propTypes = {
  getUser: PropTypes.func.isRequired
};

Profile.defaultProps = {

};

export default Profile;