// 16-3
// Create a second component to be displayed in the screen
// When the user successfully logged in / signed up, they
//   will be redirected into this screens

import React, { Component } from 'react';
import { View, Text } from 'react-native';

class EmployeeList extends Component {
    render() {
        return (
            <View>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
            </View>
        );
    }
}

export default EmployeeList;
