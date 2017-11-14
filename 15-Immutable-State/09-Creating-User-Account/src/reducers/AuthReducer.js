// 15-8
// Import the LOGIN_USER_SUCCESS types
import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS
} from './../actions/types';

// 15-8
// Add the user initial state
const INITIAL_STATE = { 
    email: '', 
    password: '',
    user: null
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload }; 
        // 15-8
        // Whenever user successfully logged in, we save the user model into our state
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload };
        default:
            return state;
    }
};
