import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
// 12-5
// Don't forget to import the SelectionReducer
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    libraries: LibraryReducer,
    // 12-5
    // We link the return value of SelectionReducer to the selectedLibraryId
    selectedLibraryId: SelectionReducer
});
