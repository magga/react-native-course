import React, { Component } from 'react';

// 8-11
// Because the TextInput now reside in the Input component that we made,
//   we don't need the TextInput import anymore, instead we import the Input component
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { text: '' };

    render() {
        console.log(`state : ${this.state.text}`);

        return (
            <Card>
                <CardSection>
                    {/* 8-11 */}
                    {/* Remember that onChangeText is a method that owned by TextInput, not from the Input */}
                    {/*   so the onChangeText here is just a props directed to TextInput in Input.js */}
                    <Input
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
