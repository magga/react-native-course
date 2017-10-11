import React, { Component } from 'react';
// 9-1
// To log in the user to firebase, we import the firebase library
import firebase from 'firebase';

import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '' };

    // 9-1
    // This is where the implementation of button pressed reside
    // Here, we logged in the user using email and password to the firebase backend
    onButtonPress() {
        const { email, password } = this.state;

        firebase.auth().signInWithEmailAndPassword(email, password);
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

                <CardSection>
                    {/* 9-1 */}
                    {/* We want to log in (or create) the user when they press the login button */}
                    {/* To do this, we can add a props to the Button component by assigning an onPress props */}
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
