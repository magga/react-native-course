import React, { Component } from 'react';
import { Provider } from 'react-redux';
// 15-6
// Redux Thunk is a Middleware
// So, to use middleware to our Redux application, we have to use a
//   helper method applyMiddleware from redux module
// To know more about middleware, visit
//   --> https://redux.js.org/docs/advanced/Middleware.html
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
// 15-6
// Import Redux Thunk to be used in our project
import ReduxThunk from 'redux-thunk';

import reducers from './src/reducers';
import config from './secret/firebase-config';
import LoginForm from './src/components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider 
                // 15-6
                // To use Redux Thunk in our Redux app, we can apply that as a middleware
                //   in the createStore method and pass it as a third parameter
                // We don't need the 2nd parameter (as it used for creating a preloaded
                //   value for our state)
                // The 3rd argument here is called a "Store Enhancer", because it is adding
                //   an additional functionality to the store
                store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}
            >
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
