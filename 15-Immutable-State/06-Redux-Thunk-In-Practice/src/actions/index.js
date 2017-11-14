// 15-6
// We'll make a login request in our Action Creator now
// To make a login request, we use firebase module
// So we have to import it first
import firebase from 'firebase';

import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';

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

// 15-6
// We make an Action Creator to make a login request
// It'll take an object as parameter and that object will contains
//   an "email" and "password" property
export const loginUser = ({ email, password }) => {
    // 15-6
    // Different from our usual Action Creator, our Redux Thunk Action Creator
    //   now returning a function instead of an Action
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user);
            });
    };
};
