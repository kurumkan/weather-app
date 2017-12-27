// if the action has set meta.remote === true
// the middleware emits actions to the backend

export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    socket.emit(action.type, action.payload);
  }

  return next(action);
}