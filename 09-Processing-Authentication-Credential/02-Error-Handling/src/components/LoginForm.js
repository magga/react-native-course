import React, { Component } from 'react';
import firebase from 'firebase';
// 9-2
// We used the Text component to display the error message
import { Text } from 'react-native';

import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '' };

    onButtonPress() {
        const { email, password } = this.state;

        // 9-2
        // If we go with the flow, when the user failed to sign in, we proceed the flow to
        //   sign them up
        // To do this, we can use "catch" statement
        // The signInWithEmailAndPassword return a promise
        // When the promise failed, it will run the catch block, so in there, we can add
        //   our sign up code
        // Then we can display an error message. To display the error message, first we have
        //   to save it to the state and render it again using the setState method
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                        this.setState({ error: 'Authentication Failed.' });
                    });
            });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='mail@example.com'
                        keyboardType='email-address'
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label='Password'
                        placeholder='password'
                        keyboardType='default'
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                {/* 9-2 */}
                {/* If the authentication failed, we then display the error message to the screen */}
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;
