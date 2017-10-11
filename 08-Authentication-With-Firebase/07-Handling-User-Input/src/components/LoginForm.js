import React, { Component } from 'react';
// 8-7
// To get the user input, React Native provided us with a native
//   component called TextInput
import { TextInput } from 'react-native';

import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
    render() {
        return (
            <Card>
                {/* 8-7 */}
                {/* Unfortunately, like Image component, TextInput by default doesn't have */}
                {/* any width and height or any style in general */}
                {/* So to display it, we have to add our own style setting */}
                <CardSection>
                    <TextInput style={{ height: 40, width: 200 }} />
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
