import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';

import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '' };

    onButtonPress() {
        const { email, password } = this.state;

        // 9-3
        // There's a little problem when user input the wrong email/password first,
        //   the error message appear, but when after that they put the right password,
        //   the error message still appear
        // To avoid this, we can reset the error message everytime user press the login button
        this.setState({ error: '' });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                        this.setState({ error: 'Authentication Failed' });
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
