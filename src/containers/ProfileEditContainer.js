import { connect } from 'react-redux';
import ProfileEdit from 'components/ProfileEdit';
import { updateUser } from 'actions/usersActions';

const select = state => ({
  username: state.auth.username,
  firstName: state.auth.firstName,
  lastName: state.auth.lastName,
  imageUrl: state.auth.imageUrl,
  initialValues: {
    firstName: state.auth.firstName,
    lastName: state.auth.lastName,
    imageUrl: state.auth.imageUrl,

  }
});

const actions = {
  updateUser
};

export default connect(select, actions)(ProfileEdit);
