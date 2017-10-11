// 8-6
// We create the LoginForm component to display the login area
// In reality, the LoginForm is not always displayed when the
//   app run for the first time
// For example if user have been logged in before, they didn't have 
//   to enter the username and password again
// To do that conditional event, we make the LoginForm as a 
//   Class-Based Component

import React, { Component } from 'react';

import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
    render() {
        return (
            <Card>
                {/* 8-6 */}
                {/* LoginForm has 3 Card Section */}
                {/* One For Username input. Another for Password input */}
                <CardSection />
                <CardSection />

                {/* 8-6 */}
                {/* And the last one for the Login button */}
                {/* We've created the Button component before, so we */}
                {/* don't have to reinvent the wheel */}
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
