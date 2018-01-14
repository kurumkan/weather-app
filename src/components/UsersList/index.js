import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Img from 'components/Img';
import Loader from 'components/Loader';
import ImgPlaceholder from '../../images/image-placeholder.jpg';
import './style.css';

class UsersList extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  renderUsers = (users) => {
    return users.map(user => {
      const status = this.props.activeUsers.indexOf(user.username) < 0 ? 'offline' : 'online';
      return (
        <div key={user.username} className="users-list-item">
          <Link to={`/users/${user.username}/`} className="user-link">
            <div className="img-wrapper">
              <Img imageUrl={user.imageUrl} placeholder={ImgPlaceholder} width="200px" />
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
  activeUsers: PropTypes.arrayOf(PropTypes.string),
  users: PropTypes.arrayOf(PropTypes.shape({
    email: PropTypes.string,
    firstName: PropTypes.string,
    imageUrl: PropTypes.string,
    lastName: PropTypes.string,
    userName: PropTypes.string
  })),

  getUsers: PropTypes.func.isRequired
};

UsersList.defaultProps = {
  activeUsers: [],
  users: []
};

export default UsersList;