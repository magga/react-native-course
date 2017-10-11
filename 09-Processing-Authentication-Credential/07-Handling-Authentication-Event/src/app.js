import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    // 9-7
    // Create a new state called "loggedIn"
    state = { loggedIn: false };

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

        // 9-7
        // To make the best experience for user when using our app, we have to display
        //   the right screen. If the user have been logged in before, surely we don't want
        //   to display the LoginForm again.
        // To know whether the user have been logged in before, we can use the onAuthStateChanged()
        //   method from firebase. To save the status of whether the user have been logged in, we 
        //   make a new property on state, called "loggedIn"
        // Next, we can do the appropriate thing according this loggedIn state
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
