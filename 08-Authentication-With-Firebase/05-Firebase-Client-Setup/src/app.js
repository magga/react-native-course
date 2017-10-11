import React, { Component } from 'react';
import { View, Text } from 'react-native';
// 8-5
// To use Firebase, we have to install Firebase library from npm using
// npm install --save firebase
import firebase from 'firebase';

import { Header } from './components/common';

class App extends Component {
    // 8-5
    // We have to set up Firebase before any other component loaded
    // To do that, we can put the initialize code inside the componentWillMount()
    //    function inside the first component that will loaded (in this case app.js)
    componentWillMount() {
        // 8-5
        // Get the configuration object from Firebase Console
        // In the menu : Authentication --> Web Setup
        // Do some modification so that it won't give any error from eslint
        const config = {
            apiKey: 'AIzaSyAolNHk9U_30cAynfZfGYchWICQv0kPN-Q',
            authDomain: 'purwadhika-429e2.firebaseapp.com',
            databaseURL: 'https://purwadhika-429e2.firebaseio.com',
            projectId: 'purwadhika-429e2',
            storageBucket: 'purwadhika-429e2.appspot.com',
            messagingSenderId: '280091914256'
          };

          firebase.initializeApp(config);
    }

    render() {
        return (
            <View>
                {/* We parse the Authentication text to Header component using props */}
                <Header headerText="Authentication" />
                <Text>An App!</Text>
            </View>
        );
    }
}

export default App;
