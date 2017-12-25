import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loader from 'components/Loader';
import './style.css';

class UsersList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsers();
  }

  renderUsers(users) {
    return users.map(user => (
      <div key={user._id}>
        {user.username} {user.firstName} {user.lastName}
        <img src={user.imageUrl} />
      </div>
    ));
  }

  render() {
    const { users } = this.props;

    if(!users.length) {
      return <Loader />;
    }
    return (
      <div className="">
        {this.renderUsers(users)}
      </div>
    );
  }
}

UsersList.propTypes = {
  getUsers: PropTypes.func.isRequired
};

UsersList.defaultProps = {

};

export default UsersList;