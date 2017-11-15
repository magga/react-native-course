import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './src/reducers';
import config from './secret/firebase-config';
// 16-2
// Import the Router.js that we've made before
import Router from './src/Router';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider 
                store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}
            >
                {/* 16-2 */}
                {/* Instead of showing LoginForm, we put the Router here */}
                {/* This Router that'll handle all of our routing from the Router.js */}
                <Router />
            </Provider>
        );
    }
}

export default App;
