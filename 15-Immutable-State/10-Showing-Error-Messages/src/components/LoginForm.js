import React, { Component } from 'react';
import { connect } from 'react-redux';
// 15-10
// Import the Text component to show the error message
import { Text } from 'react-native';

import { Card, CardSection, Input, Button } from './common';
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

                {/* 15-10 */}
                {/* Add the Text component to show the error (if there's any) */}
                <CardSection>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

// 15-10
// Add some nice styling for the error message
const styles = {
    errorTextStyle: {
        fontSize: 20,
        color: 'red'
    }
};

// 15-10
// Get the error state and return it so that we can use it in the LoginForm
const mapStateToProps = (state) => {
    const { email, password, error } = state.auth;
    return {
        email,
        password,
        error
    };
};

export default connect(mapStateToProps, { 
    emailChanged, 
    passwordChanged,
    loginUser
})(LoginForm);
