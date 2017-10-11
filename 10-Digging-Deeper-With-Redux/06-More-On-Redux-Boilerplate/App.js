import React from 'react';
import { View } from 'react-native';

// 10-6
// First of all, to use Redux, we have to install 2 components, 
//   that is redux and react-redux
// Install it using npm
//   npm install --save redux react-redux

// 10-6
// The Provider tag works together with the Store (see image)
// Each of them has a very specific job
// The Store is what actually holds our application State (all the data of our app)
//   while Provider is a communication way with React
// When we were working with Redux over in the browser, we didn't touch a single
//   React things/library
// The creator of Redux didn't design the library to only work with React
// It doesn't have any React specific binding to it
// That's the job of the 'react-redux' library here
// So this 'react-redux' library is the communication glue between Redux and React
import { Provider } from 'react-redux';

// 10-6
// createStore() is exactly the same as we try in the browser before
// It used to, as the name imply, create a new Store
import { createStore } from 'redux';

// 10-6
// Because the file name that we store the Reducers called index.js, we don't have
//   to put that 'index.js' behind the folder structure
// This is where all of the Reducers stored
import reducers from './src/reducers';

const App = () => {
  return (
    // 10-6
    // We have to create a Reducer to be parsed to the createStore() method
    // We'll made a Reducer in a different file, in this case we made it in the 
    //   src/reducers/index.js file
    <Provider store={createStore(reducers)}>
      <View />
    </Provider>
  );
};

export default App;
