import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DefaultImage from '../../images/default.jpg';
import Loader from 'components/Loader';
import './style.css';

class Profile extends Component {
  componentDidMount() {
    this.props.getUser(this.props.params.username);
  }

  render() {
    const { username, firstName, lastName, imageUrl, activeUsers, gettingAUser } = this.props;
    const status = activeUsers.indexOf(username) < 0 ? 'offline' : 'online';

    if(gettingAUser) {
      return <Loader />;
    }
    return (
      <section className="profile-section">
        <div className="profile">
          <img src={ imageUrl || DefaultImage}/>
          <div>
            <h2>{ firstName } { lastName }</h2>
          </div>
          <div>
            <span>@{ username }</span>
            <span className={`status ${status}`}>{status}</span>
          </div>
        </div>
      </section>
    );
  }
}

Profile.propTypes = {
  activeUsers: PropTypes.arrayOf(PropTypes.string),
  firstName: PropTypes.string,
  gettingAUser: PropTypes.bool,
  imageUrl: PropTypes.string,
  lastName: PropTypes.string,
  username: PropTypes.string,

  getUser: PropTypes.func.isRequired
};

Profile.defaultProps = {
  activeUsers: [],
  firstName: '',
  gettingAUser: false,
  imageUrl: '',
  lastName: '',
  username: ''
};

export default Profile;