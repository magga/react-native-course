import React, { Component } from 'react';

import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    // 8-13
    // Change the "text" state to "email" to tidy up the code
    state = { email: '' };

    render() {
        console.log(`state email : ${this.state.email}`);

        return (
            <Card>
                <CardSection>
                    {/* 8-13 */}
                    {/* Add some other props to complete the TextInput component */}
                    <Input
                        label='Email'
                        placeholder='mail@example.com'
                        keyboardType='email-address'
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection />

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
