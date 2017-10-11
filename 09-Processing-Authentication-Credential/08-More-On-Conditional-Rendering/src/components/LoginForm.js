import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';

import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            // 9-6
            // Other than "catch", we have another method (.then()) that is used to
            //   run when there is no error in running the previous method (signInWithEmailAndPassword)
            // It's the opposite of .catch()
            // We simplify the command by making a helper function and called it
            //   in the .then() method
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    // 9-6
                    // We can get the error message from firebase by getting the parameter using
                    //   arrow function
                    // But we can't use .bind() inside arrow function, so instead we just call
                    //   the .onLoginFail() helper method directly
                    .catch((error) => { this.onLoginFail(error.message); });
            });
    }

    onLoginFail(message) {
        this.setState({ 
            error: message,
            loading: false 
        });
    }

    // 9-6
    // Whenever we made a successfull login attempt, we want to clear both of Input text
    // To do this, we have to set the Input text value wherever we do a rendering (see below)
    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size='small' />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log In
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    {/* 9-6 */}
                    {/* We set the Input's value whenever we made do a render by */}
                    {/*   it's associate state object (email for Email and password for Password) */}
                    {/* And remember, the "value" here is props for "TextInput", not for "Input", */}
                    {/*   so we have to make a little change in TextInput inside the Input.js */}
                    <Input
                        label='Email'
                        placeholder='mail@example.com'
                        keyboardType='email-address'
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label='Password'
                        placeholder='password'
                        keyboardType='default'
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
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
