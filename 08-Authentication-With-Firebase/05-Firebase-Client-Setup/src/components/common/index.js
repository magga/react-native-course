// 8-3
// We don't want to import each of our component in a single line import
// If we do that, for 4 components, we will have to write 4 lines of import in the app.js
// So instead of writing each import in the app.js, we made a new file
//    (called index.js) to do the import work
// And then finally we just need to use a single import line in the app.js

export * from './Button';
export * from './Card';
export * from './CardSection';
export * from './Header';
