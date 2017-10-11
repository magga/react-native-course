import React, { Component } from 'react';

import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { text: '' };

    render() {
        console.log(`state : ${this.state.text}`);

        return (
            <Card>
                <CardSection>
                    {/* 8-12 */}
                    {/* We add the label "Email" here from the LoginForm */}
                    <Input
                        label='Email'
                        onChangeText={text => this.setState({ text })}
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
