import firebase, { googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';

export const login = (uid, name, provider) => ({
  type: 'LOGIN',
  uid,
  name,
  provider,
});

export const startGoogleLogin = () => {
  return dispatch => firebase.auth().signInWithPopup(googleAuthProvider);
  // `login` is called within `firebase.auth().onAuthStateChanged` in `app.js`
};

export const startFacebookLogin = () => {
  return dispatch => firebase.auth().signInWithPopup(facebookAuthProvider);
  // `login` is called within `firebase.auth().onAuthStateChanged` in `app.js`
};

export const logout = () => ({
  type: 'LOGOUT',
});

export const startLogout = () => {
  return (dispatch, getState) => {
    const loginPageUrl = location.origin;
    if (loginPageUrl && getState().auth.provider === 'google.com') {
      location.assign(`https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=${loginPageUrl}`);
    }
    return firebase.auth().signOut();
  };
};
