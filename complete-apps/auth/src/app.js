import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

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

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                // 9-9
                // To log the user out from our app, we can simply call the built-in
                //   method provided by firebase library, that is auth().signOut()
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                );

            case false:
                return <LoginForm />;

            default:
                return <Spinner size='large' />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
