import React, { Component } from 'react';
// 8-6
// We don't need Text component anymore
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
// 8-6
// We use LoginForm component that we created before to display the
// login area
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
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
                <Header headerText="Authentication" />
                {/* 8-6 */}
                {/* Put the LoginForm component below the Authentication Header */}
                <LoginForm />
            </View>
        );
    }
}

export default App;
