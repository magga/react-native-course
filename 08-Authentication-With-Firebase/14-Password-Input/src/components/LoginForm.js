import React, { Component } from 'react';

import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '' };

    render() {
        console.log(`state email : ${this.state.email}`);
        console.log(`state password : ${this.state.password}`);

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
                    {/* 8-14 */}
                    {/* Password input need to be hidden from the screen, so we set the */}
                    {/* secureTextEntry to true */}
                    {/* We don't have to set the secureTextEntry in the Email input as the */}
                    {/* email doesn't need to be hidden */}
                    <Input
                        secureTextEntry
                        label='Password'
                        placeholder='password'
                        keyboardType='default'
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
