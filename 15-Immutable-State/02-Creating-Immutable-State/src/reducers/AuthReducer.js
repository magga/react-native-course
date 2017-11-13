import { EMAIL_CHANGED } from './../actions/types';

const INITIAL_STATE = { email: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            // 15-2
            // From the previos section, we know that we shouldn't do this
            //   line of codes for updating the state (don't mutate the state)
            //      state.email = action.payload;
            //      return state;

            // Instead we can use this line of code
            // You can read this line as :
            //   Make a new object
            //   Take all of the properties of the "state" and throw them into that new object
            //   Then define the property "email" and give it a value of action.payload
            //   If the "email" property have already exist, overwrite it's value
            return { ...state, email: action.payload }; 
        default:
            return state;
    }
};
