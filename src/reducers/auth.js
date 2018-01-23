export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { uid: action.uid, name: action.name, provider: action.provider };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
