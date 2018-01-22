import firebase, {googleAuthProvider, facebookAuthProvider} from '../firebase/firebase';

export const login = (uid, name) => ({
    type: 'LOGIN',
    uid,
    name,
});

export const startGoogleLogin = () => {
    return (dispatch) => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
    // `login` is called within `firebase.auth().onAuthStateChanged` in `app.js`
};

export const startFacebookLogin = () => {
    return (dispatch) => {
        return firebase.auth().signInWithPopup(facebookAuthProvider);
    };
    // `login` is called within `firebase.auth().onAuthStateChanged` in `app.js`
};

export const logout = () => ({
    type: 'LOGOUT',
});

export const startLogout = () => {
    return (dispatch) => {
        /* How to sign out and prevent auto login next time:
         * https://www.udemy.com/react-2nd-edition/learn/v4/questions/3058926
         */
        return firebase.auth().signOut();
    };
    // `logout` is called within `firebase.auth().onAuthStateChanged` in `app.js`
};