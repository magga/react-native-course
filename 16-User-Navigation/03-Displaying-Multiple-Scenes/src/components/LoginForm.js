import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

// 15-11
// Add the Spinner component to tell user when our app is loading
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from './../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    // 15-11
    // Create a helper method to determine if we're currently in the loading
    //   state, show the spinner
    // If not, show the Login Button instead
    renderButton() {
        if (this.props.loading) {
            return (
                <Spinner size='large' />
            );
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
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
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label='Password'
                        placeholder='password'
                        secureTextEntry
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <CardSection>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </CardSection>

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
        color: 'red'
    }
};

// 15-11
// Get the loading state and return it so that we can use it in the LoginForm
const mapStateToProps = (state) => {
    const { email, password, error, loading } = state.auth;
    return {
        email,
        password,
        error,
        loading
    };
};

export default connect(mapStateToProps, { 
    emailChanged, 
    passwordChanged,
    loginUser
})(LoginForm);
