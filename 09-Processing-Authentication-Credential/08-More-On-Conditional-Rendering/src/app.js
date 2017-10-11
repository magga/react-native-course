import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

// 9-8
// We need a help from Button and Spinner components here
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    // 9-8
    // Set the initial value to null
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
        // 9-8
        // There's 2 normal conditions for the user, that is whether they are
        // (1) Have been logged in before (loggedIn: true)
        // (2) Or they never logged in or they have been logged out (loggedIn: false)
        // But apart from that, there is another state, that is the state when our app
        //   doesn't know whether the user have been logged in or not
        // It happened when our app is checking the state to the firebase
        // In this case, the loggedIn property is neither true nor false
        // So we make another state, that is "null" 
        // When our app in null state, we want the user to wait when we check the loggedIn
        //   state to firebase. So it's better if we display the Spinner component
        //   to tell the user to wait until we finish doing our background job
        switch (this.state.loggedIn) {
            case true:
                return <Button>Log Out</Button>;

            case false:
                return <LoginForm />;

            default:
                return <Spinner size='large' />;
        }

        // if (this.state.loggedIn) {
        //     return (
        //         <Button>
        //             Log Out
        //         </Button>
        //     );
        // }

        // return <LoginForm />;
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {/* 9-8 */}
                {/* When the app first run, we have to decide whether to display a login form */}
                {/*   or the main screen. To make a good experience for user, we surely don't */}
                {/*   to display a login form again if the user have been logged in before */}
                {/* To achieve that, we make a helper method to determine if whether the user */}
                {/*   have been logged in before and display the appropriate screen accordingly */}
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
