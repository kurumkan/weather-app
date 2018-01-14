import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Signup from 'components/Signup';
import { signupUser } from 'actions/usersActions';

const select = state => ({
  authError: state.auth.error.signup
});

const actions = {
  signupUser
};

export default withRouter(connect(select, actions)(Signup));
