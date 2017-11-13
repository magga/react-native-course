import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import reducers from './src/reducers';
import config from './secret/firebase-config';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>Hello</Text>
                </View>
            </Provider>
        );
    }
}

export default App;
