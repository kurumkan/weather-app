import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Signin from 'components/Signin';
import { signinUser } from 'actions/usersActions';

const select = state => ({
  authError: state.auth.error.signin
});

const actions = {
  signinUser
};

export default withRouter(connect(select, actions)(Signin));
