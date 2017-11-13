import React, { Component } from 'react';
// 14-4
// Import the connect function from react-redux to dispatch the Action Creator
//   that we made before
import { connect } from 'react-redux';

import { Card, CardSection, Input, Button } from './common';
import { emailChanged } from './../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        // 14-4
        // Now that we've wired up our Action Creator with a connect function,
        //   we now have access to the props of emailChanged
        // We don't have a reducers yet, so we'll make one then
        this.props.emailChanged(text);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label='Email'
                        placeholder='mail@example.com'
                        // 14-3
                        // Pass the props wherever user change the email input
                        // We use the helper method here
                        onChangeText={this.onEmailChange.bind(this)}
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

// 14-4
// Hook up the Actions Creator with the connect() helper
// We don't have a mapStateToProps function yet, so we can ignore it for now
export default connect(null, { emailChanged })(LoginForm);
