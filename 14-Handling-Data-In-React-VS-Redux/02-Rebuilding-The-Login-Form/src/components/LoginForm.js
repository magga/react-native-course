// 14-2
// Write the boilerplate for the LoginForm component

import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label='Email'
                        placeholder='mail@example.com'
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

export default LoginForm;
