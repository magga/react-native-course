import firebase from 'firebase';

import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    // 15-7
    // Add a login user types
    LOGIN_USER_SUCCESS
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

// 15-7
// To test things out, we have to wired up the loginUser to the
//   button pressed on the LoginForm.js
export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                // 15-7
                // Here we manually dispatch an action
                // The magic things here is that we're not actually calling dispatch
                //   until the request is completed
                // After the request completed, we create an Action and manually passed
                //   it off to dispatch
                dispatch({
                    type: LOGIN_USER_SUCCESS,
                    payload: user
                });
            });
    };
};
