import { connect } from 'react-redux';
import Signup from 'components/Signup';
import { signupUser } from 'actions/usersActions';

const select = state => ({});

const actions = {
  signupUser
};

export default connect(select, actions)(Signup);
