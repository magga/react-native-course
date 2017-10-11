import { combineReducers } from 'redux';
// 10-3
// Import that LibraryReducer file
import LibraryReducer from './LibraryReducer';

export default combineReducers({
    // 10-3
    // By convention, we usually locate 1 Reducer in 1 file, just like a Component
    // So inside of the "reducers" directory, we make a new file that's going to
    //   store all the code of the "Library" Reducer
    libraries: LibraryReducer
});
