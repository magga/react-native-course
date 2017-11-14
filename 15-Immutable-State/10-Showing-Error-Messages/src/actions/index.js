import firebase from 'firebase';

import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    // 15-9
    // Create a type of LOGIN_USER_FAIL
    LOGIN_USER_FAIL
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

// 15-9
// We add the code when the user failed the login process, it create 
//   a new user instead
export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => loginUserSuccess(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((user) => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFail(dispatch));
            });
    };
};

// 15-9
// Create a helper method if the user successfully logged in or signed up so
//   that our code doesn't expanding too much
const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
};

// 15-9
// Create a helper method if the user failed to either logged in or signed up so
//   that our code doesn't expanding too much
const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    });
};
