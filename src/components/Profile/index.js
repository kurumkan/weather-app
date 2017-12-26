import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import DefaultImage from '../../images/default.jpg';
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
    const { username, firstName, lastName, imageUrl } = this.props;

    if(!username) {
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
            @{ username }
          </div>
        </div>
      </section>
    );
  }
}

Profile.propTypes = {
  getUser: PropTypes.func.isRequired
};

Profile.defaultProps = {

};

export default Profile;