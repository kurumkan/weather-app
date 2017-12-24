import { connect } from 'react-redux';
import Header from 'components/Header';
import { signoutUser } from 'actions/usersActions';

const select = state => ({
  authenticated: state.auth.authenticated
});

const actions = {
  signoutUser
};

export default connect(select, actions)(Header);
