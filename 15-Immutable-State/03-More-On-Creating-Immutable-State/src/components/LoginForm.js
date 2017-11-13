import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardSection, Input, Button } from './common';
// 15-3
// Import the passwordChanged action
import { emailChanged, passwordChanged } from './../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    // 15-3
    // Add the helper method for password input change
    onPasswordChange(text) {
        this.props.passwordChanged(text);
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
                        // 15-3
                        // Wire up the onChangeText props to the helper method
                        onChangeText={this.onPasswordChange.bind(this)}
                        // 15-3
                        // Wire up the password state
                        value={this.props.password}
                    />
                </CardSection>

                <CardSection>
                    <Button>
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
        // 15-3
        // Connect the password state to the LoginForm
        password: state.auth.password
    };
};

// 15-3
// Connect the passwordChanged action so that it can be dispatched inside the LoginForm
export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
