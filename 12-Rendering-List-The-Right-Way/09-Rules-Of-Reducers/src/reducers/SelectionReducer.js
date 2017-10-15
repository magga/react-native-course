// 12-9
// Now we want everytime this Reducer called, when the type is equal to 'select_library',
//   it will return it's payload
// Then the payload will be passed to the selectedLibraryId
// But when the type is not 'select_library', we don't want to do anything
// So we add the switch syntax here and for the non-'select_library' type, we will return
//   the current state
// And lastly remember that this reducer will run for the very first time when our app
//   booted even though no one called it
// And remember too that the State can't be undefined, so we give the initial value of null
//   (using the ES6 syntax)
export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};
