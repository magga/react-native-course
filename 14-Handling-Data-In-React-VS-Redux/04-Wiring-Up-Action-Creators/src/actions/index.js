// 14-3
// The first step, we create an Action Creator to change the email State
// This Action Creator will be called from the LoginForm everytime the 
//   user type something to the email input
// This Action Creator will return an Action to be dispatched to the Reducer
//   later

export const emailChanged = (text) => {
    return {
        type: 'email_changed',
        payload: text
    };
};
