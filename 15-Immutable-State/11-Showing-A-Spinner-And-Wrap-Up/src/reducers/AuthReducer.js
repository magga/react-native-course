// 15-11
// Import the LOGIN_USER_START types
import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_START
} from './../actions/types';

// 15-10
// Add the loading initial state
// At the start, it's value is false as we don't do any sort
//   of fetching data in the beginning of our app
const INITIAL_STATE = { 
    email: '', 
    password: '',
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload }; 
        // 15-11
        // When we successfully logged in / signed up, we can clear up the form
        //   and return it to the initial state
        // The only difference is that now we have the user's object filled
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        // 15-11
        // When we finish the login or signup process, set the loading state to false
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed', password: '', loading: false };
        // 15-11
        // This type of action tell the component that we're currently in the
        //   "loading" state
        // We also want to wipe all of the error message when we start to
        //   fetch a data
        case LOGIN_USER_START:
            return { ...state, loading: true, error: '' }; 
        default:
            return state;
    }
};
