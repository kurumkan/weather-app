import { connect } from 'react-redux';
import Signin from 'components/Signin';
import { signinUser } from 'actions/usersActions';

const select = state => ({
  authError: state.auth.error.signin
});

const actions = {
  signinUser
};

export default connect(select, actions)(Signin);
