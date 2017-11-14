import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardSection, Input, Button } from './common';
// 15-7
// Import the loginUser action
import { emailChanged, passwordChanged, loginUser } from './../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    // 15-7
    // Create a helper method to call the loginUser Action Creator whenever
    //   the user clicked on the Login button
    // After all the code is set, run the app and see the remote debugger
    //   console when we hit the Login button
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

                <CardSection>
                    {/* 15-7 */}
                    {/* Call the helper method to call the loginUser Action Creator */}
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password
    };
};

// 15-7
// Connect the loginUser action so that it can be dispatched inside the LoginForm
export default connect(mapStateToProps, { 
    emailChanged, 
    passwordChanged,
    loginUser
})(LoginForm);
