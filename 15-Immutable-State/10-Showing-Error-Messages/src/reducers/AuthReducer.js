// 15-10
// Import the LOGIN_USER_FAIL types
import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from './../actions/types';

// 15-10
// Add the error initial state
const INITIAL_STATE = { 
    email: '', 
    password: '',
    user: null,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload }; 
        // 15-10
        // If the user successfully logged in or signed up, chances are there
        //   is no error message to display, so we can reset the error message
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload, error: '' };
        // 15-10
        // Whenever user failed to logged in or signed up, 
        //   we set the error state to some message
        // And we can reset the password field to an empty string again 
        //   so the user have to retype the password from scratch
        // Lastly show the error state from the LoginForm
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed', password: '' };
        default:
            return state;
    }
};
