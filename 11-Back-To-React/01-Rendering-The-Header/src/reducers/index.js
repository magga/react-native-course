// 10-6
// We put all the Reducers here and export it as a single file

// 10-6
// We had previously created a redux Store with just 1 Reducer
// But in the vast majority of apps we want to have multiple Reducers and
//   multiple different pieces of State
// To make all these different Reducers play nicely together, we use this 
//   combineReducers function from the Redux library
import { combineReducers } from 'redux';

export default combineReducers({
    // 10-6
    // At this point, we create 1 Reducer
    // It's going to have the name 'libraries'
    // And by default this Reduce always return an array no matter what
    // So even an action comes through this Reducer, we are always getting an empty array
    libraries: () => []
});
