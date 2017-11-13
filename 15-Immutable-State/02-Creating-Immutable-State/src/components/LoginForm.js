import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardSection, Input, Button } from './common';
import { emailChanged } from './../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label='Email'
                        placeholder='mail@example.com'
                        onChangeText={this.onEmailChange.bind(this)}
                        // 15-2
                        // Set the email's value to the email from the state
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label='Password'
                        placeholder='password'
                        secureTextEntry
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

// 15-2
// Create the mapStateToProps to get the email from the state
const mapStateToProps = (state) => {
    return {
        email: state.auth.email
    };
};

// 15-2
// Wired the mapStateToProps using connect so the LoginForm can use the email state
export default connect(mapStateToProps, { emailChanged })(LoginForm);
