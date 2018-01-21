import {firebase, googleAuthProvider} from '../firebase/firebase';

export const login = (uid, name) => ({
    type: 'LOGIN',
    uid,
    name,
});

export const startLogin = () => {
    return (dispatch) => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
    // `login` is called within `firebase.auth().onAuthStateChanged` in `app.js`
};

export const logout = () => ({
    type: 'LOGOUT',
});

export const startLogout = () => {
    return (dispatch) => {
        return firebase.auth().signOut();
    };
    // `logout` is called within `firebase.auth().onAuthStateChanged` in `app.js`
};