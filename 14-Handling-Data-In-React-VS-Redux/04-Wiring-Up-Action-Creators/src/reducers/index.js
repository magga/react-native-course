import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';

export default combineReducers({
    // 14-4
    // Wire up the reducer here
    // The auth is the key/state that will hold all the data for our authentication process
    auth: AuthReducer
});
