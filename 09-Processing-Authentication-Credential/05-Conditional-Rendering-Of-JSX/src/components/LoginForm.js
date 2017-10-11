import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';

// 9-5
// Import Spinner to use that
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    // 9-5
    // We make a "loading" state to save the condition of whether our app is
    //   waiting for a data or not
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        const { email, password } = this.state;

        // 9-5
        // When we press the button, we want to display a Spinner to show user that
        //   our app is still responding and want the user to wait
        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                        this.setState({ error: 'Authentication Failed' });
                    });
            });
    }

    // 9-5
    // We make a helper method to determine whether to display a button or a spinner
    // So when we are in a loading state, we don't want to display a "log in" button to
    //   avoid the user of clicking it twice. We want to display a Spinner instead
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
                    {/* 9-5 */}
                    {/* Instead of always displaying the "log in" button, we call the helper method here */}
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
