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
    /* How to sign out and prevent auto login next time:
             * https://www.udemy.com/react-2nd-edition/learn/v4/questions/3058926
             */
    const loginPageUrl = process.env.LOGIN_PAGE_URL;
    if (loginPageUrl && getState().auth.provider === 'google.com') {
      location.assign(`https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=${loginPageUrl}`);
    }
    return firebase.auth().signOut();
  };
};
