import { connect } from 'react-redux';
import UsersList from 'components/UsersList';
import { getPins, showPinPopup, hidePinPopup } from 'actions/pinActions';

const select = state => ({
  focusedPin: state.pins.focusedPin,
  pins: state.pins.pins,
  pinsLeft: state.pins.pinsLeft
});

const actions = {
  getPins,
  hidePinPopup,
  showPinPopup
};

export default connect(select, actions)(UsersList);
