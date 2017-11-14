import firebase from 'firebase';

import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    // 15-11
    // Create a type of LOGIN_USER_START
    LOGIN_USER_START
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

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        // 15-11
        // When the loginUser called, we immediately called the dispatch of 
        //   LOGIN_USER_START to tell the Redux that we're currentlny in the
        //   "loading" state
        // Remember that in the Redux Thunk's function, we can call dispatch function
        //   as many time as we want
        dispatch({ type: LOGIN_USER_START });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => loginUserSuccess(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((user) => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFail(dispatch));
            });
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
};

const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    });
};
