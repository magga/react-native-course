import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import reducers from './src/reducers';
import config from './secret/firebase-config';
// 14-2
// To do some initial display, import the LoginForm component
import LoginForm from './src/components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                {/* 14-2 */}
                {/* Display the LoginForm component */}
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
