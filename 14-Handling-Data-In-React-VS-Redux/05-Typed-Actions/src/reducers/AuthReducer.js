// 14-5
// Import the EMAIL_CHANGED as the switch case for incoming email changed
import { EMAIL_CHANGED } from './../actions/types';

const INITIAL_STATE = { email: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // 14-5
        // Add the EMAIL_CHANGED conditional
        case EMAIL_CHANGED:
            
        default:
            return state;
    }
};
