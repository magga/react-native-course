// 14-4
// Create the AuthReducer.js to handle the authentication for the LoginForm

// The very first time the reducer is called, we hae to have some 
//   initial value or default state
// A common pattern that most of people used is to make a variable that is
//   just hold the initial state for the reducer

const INITIAL_STATE = { email: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
