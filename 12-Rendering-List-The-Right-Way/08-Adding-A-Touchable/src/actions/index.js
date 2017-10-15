// 12-6
// In our app, user can select the library they want and then our app will
//   display it's description
// It means that every time user select a different library, we have to update
//   the SelectionReducer
// Remember that to update a Reducer, we need an Action
// But Action is just a javascript object
// To make an Action from our Component, we can use a new helper called
//   ActionCreator (see the image associated with this section)
// As the name imply, ActionCreator is just a function that create an Action
// So we make a new folder called "actions" and put all of our Action
//   and ActionCreator inside of it

// 12-6
// Remember that an Action required a 'type' property and an optional 'payload' property
// In this app, we need an Action to tell the Reducer to set the selectedLibraryId
//   to the library that's being tapped by the user
// This selectLibrary ActionCreator need 1 parameter to becalled, that is the id of the
//   library that currently being tapped by the user
// This ActionCreator then return an Action (a normal javascript object) to be parsed
//   to the Reducer

export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    };
};
