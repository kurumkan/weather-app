import { connect } from 'react-redux';
import Profile from 'components/Profile';
import { getUser } from 'actions/usersActions';

const select = state => {
  const { username, firstName, lastName, imageUrl } = state.users.currentUser;
  return { username, firstName, lastName, imageUrl };
};

const actions = {
  getUser
};

export default connect(select, actions)(Profile);
