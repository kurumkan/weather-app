import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Header from 'components/Header';
import { signoutUser } from 'actions/usersActions';

const select = state => ({
  authenticated: state.auth.authenticated,
  username: state.auth.username
});

const actions = {
  signoutUser
};

export default withRouter(connect(select, actions)(Header));
