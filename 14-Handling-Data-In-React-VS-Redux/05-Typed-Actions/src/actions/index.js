import { EMAIL_CHANGED } from './types';

export const emailChanged = (text) => {
    return {
        // 14-5
        // The 'email_changed' string here have a very strong connection
        //   with the AuthReducer, as it will be converted as the action.type there
        // It'll be a disaster if we have a typo here and put the wrong string
        //   on the AuthReducer (ex we put 'email_change' in the switch statement)
        // If we made a typo like that, the reducer is never going to work properly
        //   when this action is being dispatched
        // To solve this issue, the convention of the Redux Community is to make a
        //   variables to hold our Action Type (see the corresponding image)

        // We're going to make a new file called types.js inside of the actions folder
        // Inside this file, we're going to make a set of constant variables and 
        //   assign them a string 
        // Then we're going to import that into both of our reducer and action
        // We're going to use that variable as opposed to just a raw string
        
        // type: 'email_changed',
        type: EMAIL_CHANGED,
        payload: text
    };
};
