import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import Loader from 'components/Loader';
import DefaultImage from '../../images/default.jpg';
import './style.css';

class UsersList extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  renderUsers = (users) => {
    return users.map(user => {
      const status = this.props.activeUsers.indexOf(user.username) < 0 ? 'offline' : 'online';
      return (
        <div key={user._id} className="users-list-item">
          <Link to={`users/${user.username}/`} className="user-link">
            <div className="img-wrapper">
              <img src={user.imageUrl || DefaultImage}/>
            </div>
            <div className="user-info">
              <div>
                {user.firstName} {user.lastName}
              </div>
              <div>
                <span className="username">@{user.username}</span>
                <span className={`status ${status}`}>{status}</span>
              </div>
            </div>
          </Link>
        </div>
      )
    });
  }

  render() {
    const { users } = this.props;
    if(!users.length) {
      return <Loader />;
    }
    return (
      <section className="section-users-list">
        {this.renderUsers(users)}
      </section>
    );
  }
}

UsersList.propTypes = {
  getUsers: PropTypes.func.isRequired
};

UsersList.defaultProps = {

};

export default UsersList;