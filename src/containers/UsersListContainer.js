import { connect } from 'react-redux';
import UsersList from 'components/UsersList';
import { getUsers } from 'actions/usersActions';

const select = state => ({
  users: state.users.users
});

const actions = {
  getUsers
};

export default connect(select, actions)(UsersList);
