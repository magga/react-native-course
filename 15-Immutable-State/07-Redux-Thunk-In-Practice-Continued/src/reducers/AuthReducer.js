// 15-3
// Import the PASSWORD_CHANGED types
import { EMAIL_CHANGED, PASSWORD_CHANGED } from './../actions/types';

// 15-3
// Add the password initial state
const INITIAL_STATE = { email: '', password: '' };

export default (state = INITIAL_STATE, action) => {
    // 15-7
    // Now we want to check all the actions that we have
    // But before that, because we don't implement any SignUp method yet,
    //   we have to make a new user manually via Firebase Console
    // Visit the Authentication page in the Firebase Console and create
    //   a new user manually from there
    console.log(action);

    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload }; 
        // 15-3
        // Add the case where the password changed action is being dispatched
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload }; 
        default:
            return state;
    }
};
